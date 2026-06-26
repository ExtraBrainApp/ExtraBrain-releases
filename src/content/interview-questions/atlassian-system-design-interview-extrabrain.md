---
title: "Atlassian System Design Interview Questions for ExtraBrain Practice"
seoTitle: "Atlassian System Design Interview Questions and Practice Guide"
description: "Practice Atlassian system design interviews with Jira, notifications, Confluence collaboration, trade-offs, and responsible AI prep."
publishDate: 2026-02-18
updatedDate: ""
author: "ExtraBrain"
tags:
  - Atlassian
  - System Design
  - Interview Questions
  - Jira
  - Confluence
seoTags:
  - Atlassian system design interview
  - Jira system design interview
  - Confluence collaborative editor design
  - backend system design interview
  - AI interview assistant for system design
sourceUrl: "exports/interview-questions/atlassian-system-design-interview.md"
canonicalUrl: "https://extrabrain.app/interview-questions/atlassian-system-design-interview-extrabrain/"
importedAt: "2026-06-25T18:49:28.053Z"
ogImage: "/assets/blog-covers/interviewbee-review-extrabrain.webp"
ogImageAlt: "System design interview practice with an AI interview copilot"
draft: false
---

Atlassian system design interviews usually test how well you can turn product-shaped ambiguity into a reliable architecture.
For backend, full-stack, and architect roles, the interview often sits beside coding rounds, values interviews, and leadership discussions.
The strongest answers do not only name technologies.
They clarify requirements, draw boundaries, explain data models, reason about reliability, and make trade-offs that fit Jira, Confluence, and enterprise collaboration workflows.

This guide rewrites the core Atlassian-style system design practice set for ExtraBrain readers.
Use it to rehearse aloud, pressure-test your assumptions, and build a repeatable interview structure.
If you use ExtraBrain during preparation or a live interview, use it only where the interview, employer, school, workplace, and platform rules allow AI assistance, transcription, screenshots, or notes.

ExtraBrain is a free, local-first Mac desktop AI interview assistant and meeting copilot with live transcription, screen-aware context, local Gemma 4 where installed and compatible, bring-your-own AI providers, and privacy controls.
For system design prep, it can help you review transcripts, capture diagrams or prompts, organize follow-up questions, and practice explaining trade-offs without replacing your own judgment.

## How Atlassian System Design Interviews Are Usually Evaluated

Atlassian-style system design questions tend to be grounded in collaboration products.
You may be asked to design an issue tracker, a notification service, a document collaboration engine, an enterprise permissions layer, or a plugin-friendly platform.
The interviewer is usually evaluating process as much as final architecture.

A strong answer normally shows these signals:

- You clarify functional and non-functional requirements before drawing components.
- You connect design choices to product behavior, such as issue workflows, document editing, or tenant isolation.
- You choose a reasonable scale target and state your assumptions.
- You design APIs, data models, and asynchronous flows with clear ownership.
- You discuss reliability, latency, consistency, observability, and failure modes.
- You explain why one technology or pattern is better than another for the scenario.
- You communicate in layers so the interviewer can follow your thinking.

A useful answer does not need to be perfect.
It needs to be structured, defensible, and responsive to follow-up constraints.

## Question 1: Design the Core Project Management System Behind Jira

### Requirement Clarification

Start by confirming the product scope.
A Jira-like project management system needs to support projects, issues, task tracking, defect tracking, workflow configuration, permissions, and basic reporting.
The priority should be the full issue lifecycle first, workflow configuration second, and reporting third.

A reasonable set of functional requirements includes:

- Users can create projects inside an organization or tenant.
- Users can create, update, assign, comment on, and close issues.
- Issues can represent tasks, bugs, stories, requirements, or incidents.
- Teams can configure workflows, statuses, and allowed transitions.
- Managers can view basic reports such as issue counts, completion rates, and aging.
- Permissions can restrict who can view, create, assign, transition, or administer issues.

A reasonable set of non-functional requirements includes:

- Support roughly 100,000 daily active users.
- Handle peak traffic above 1,000 requests per second.
- Keep common read and write APIs responsive, with a target near 100 ms for cached reads and simple writes.
- Store business data for at least three years.
- Provide strong multi-tenant isolation for enterprise customers.
- Aim for 99.99 percent availability for core issue workflows.

State constraints clearly.
For example, you can say that complex third-party integrations, marketplace apps, CI/CD integrations, and advanced analytics are out of scope unless the interviewer asks for them.
This lets you protect time for the core product path.

### High-Level Architecture

A clean architecture can be split into six layers.
Each layer should have a simple responsibility.

| Layer | Components | Responsibility |
| --- | --- | --- |
| Access layer | Load balancer, API gateway | Route traffic, authenticate users, enforce rate limits, apply request validation |
| Application layer | Project service, issue service, workflow service, permission service, report service | Own business logic and service boundaries |
| Cache layer | Redis Cluster | Cache hot projects, issue details, workflow rules, and permission summaries |
| Storage layer | PostgreSQL primary and replicas | Store projects, issues, workflows, permissions, comments, and audit data |
| Async layer | Kafka or another durable message bus | Process notifications, reporting events, audit pipelines, and search indexing |
| Object layer | S3-compatible storage | Store attachments, screenshots, exported files, and large binary objects |

The API gateway should validate identity and tenant context before requests reach business services.
The issue service should own issue creation and state changes.
The workflow service should own transition rules.
The permission service should centralize access checks so permissions do not get duplicated across every service.

### Core Issue Module

The issue module is the heart of the design.
It must handle a high volume of reads, frequent updates, and a long audit trail.

A practical PostgreSQL schema can include these tables:

| Table | Important fields | Purpose |
| --- | --- | --- |
| issues | id, tenant_id, project_id, issue_type, title, description, status, assignee_id, reporter_id, priority, created_at, updated_at, due_at | Store the current state of each issue |
| issue_status_history | id, tenant_id, issue_id, old_status, new_status, operator_id, operated_at | Preserve transition history for audit and debugging |
| issue_links | id, tenant_id, source_issue_id, target_issue_id, relationship_type | Represent blockers, duplicates, related work, or requirement links |
| issue_attachments | id, tenant_id, issue_id, object_key, file_name, file_size, created_at | Point to objects stored outside the relational database |
| issue_comments | id, tenant_id, issue_id, author_id, body, created_at, updated_at | Store discussion threads and collaboration context |

Use globally unique IDs generated by a Snowflake-style service, ULID, or database-supported identity strategy.
Make tenant_id part of major indexes and access filters.
This is important for isolation, query performance, and later data lifecycle operations.

Useful API examples include:

```text
POST /api/v1/issues
PUT /api/v1/issues/{issueId}
PUT /api/v1/issues/{issueId}/status
GET /api/v1/issues?projectId=&status=&assigneeId=&priority=&cursor=
POST /api/v1/issues/{issueId}/comments
POST /api/v1/issues/{issueId}/attachments
```

For issue creation, validate the tenant and project permissions, create the issue row, write an audit event, and publish an asynchronous event for notifications and indexing.
For status updates, validate the workflow transition and actor permission before writing the new status.
For issue queries, support pagination, filters, and stable ordering so large projects do not produce expensive unbounded queries.

### Workflow Module

A Jira-like workflow is a graph of statuses and transitions.
Interviewers often care about how you model this because workflows combine data modeling, permission checks, and product flexibility.

A reasonable model includes:

| Table | Important fields | Purpose |
| --- | --- | --- |
| workflows | id, tenant_id, name, description, version, is_active | Store workflow definitions |
| workflow_nodes | id, tenant_id, workflow_id, name, node_type | Store statuses such as To Do, In Progress, Done |
| workflow_transitions | id, tenant_id, workflow_id, from_node_id, to_node_id, rule_expression, permission_id | Store allowed transitions and required permissions |
| project_workflows | id, tenant_id, project_id, workflow_id | Attach a workflow to a project or issue type |

When a user tries to move an issue from one status to another, the issue service calls the workflow service or a local workflow rule evaluator.
The evaluator checks whether the transition exists, whether the workflow version is active, and whether the user has the required role.

Cache popular workflow definitions in Redis using a key that includes tenant_id, workflow_id, and workflow_version.
Invalidate the cache when an administrator publishes a new workflow version.
This keeps transition checks fast without sacrificing configuration flexibility.

### Multi-Tenant Isolation

Multi-tenancy is a natural Atlassian-style follow-up because enterprise collaboration software stores sensitive business data.
There are multiple options, and each has trade-offs.

| Strategy | Benefit | Trade-off |
| --- | --- | --- |
| Shared database and shared schema | Efficient and simple to operate | Requires strict tenant filters and careful access control |
| Shared database with separate schemas | Better logical isolation | More operational complexity at scale |
| Separate database per large tenant | Strongest isolation and custom scaling | Higher cost and harder fleet operations |

A strong interview answer can propose a hybrid.
Use shared database and shared schema for small and medium tenants, then move large enterprise tenants to dedicated schemas or dedicated database clusters when isolation, compliance, or scale requires it.

Every storage system should include tenant-aware partitioning.
Redis keys can use a tenant prefix.
Kafka topics can either include tenant metadata in messages or use tenant-aware partitions for high-volume tenants.
Object storage keys can include tenant_id and project_id.
Application services should never trust tenant_id from the client without checking it against the authenticated identity.

### Technology Choices and Trade-Offs

PostgreSQL is a strong default because it handles relational data, transactions, indexing, JSON fields for configuration, and complex reporting queries.
Read replicas can offload heavy reads, but writes still go through the primary path.

Redis Cluster is useful for hot issue details, permission summaries, workflow rules, and short-lived query results.
Use TTLs and explicit invalidation for data that changes frequently.
Avoid caching authorization decisions for too long because permission changes must take effect quickly.

Kafka is useful for issue-created, issue-updated, status-changed, comment-added, and attachment-added events.
Downstream consumers can power notifications, audit logs, reporting, search indexing, and analytics.
The important design point is that the core issue write should not block on slow email delivery or report computation.

A time-series database can be useful for high-cardinality operational metrics and product analytics trends.
For simple product reports, PostgreSQL materialized views or an analytical warehouse may be enough.
Mention that you would choose the lighter option first unless reporting volume or query shape justifies a specialized store.

### High Availability and Concurrency

For availability, deploy multiple stateless application instances behind a load balancer.
Use database replication and automated failover.
Run Redis and Kafka in clustered configurations across availability zones where possible.
Keep core issue CRUD independent from optional reporting paths so degraded analytics do not take down daily work.

For concurrency, index common filters such as tenant_id, project_id, status, assignee_id, priority, and updated_at.
Use cursor pagination rather than offset pagination for large result sets.
Use optimistic locking or version columns for issue updates that can race.
For workflow transitions, compare the current issue version before committing the status change.

For cache protection, add request coalescing for hot keys and Bloom filters for impossible issue IDs if cache penetration becomes a real problem.
Set clear rate limits at the API gateway for expensive endpoints.
If the system is under pressure, degrade non-critical report queries before issue creation and status updates.

### Problems and Follow-Up Solutions

A good answer also names risks.
Custom workflows may become slow if rule expressions are interpreted on every transition.
Precompile workflow rules into a compact representation and cache the active version.

Attachments may create storage pressure over time.
Store large files in object storage, scan them asynchronously, and use lifecycle policies to move old files to lower-cost tiers.

Reports may lag behind writes.
Publish issue events to Kafka and update read-optimized aggregates asynchronously.
Tell the interviewer what freshness target you would accept, such as reports updating within seconds rather than being perfectly synchronous.

## Question 2: Design the Jira Notification System

### Requirement Clarification

A Jira-like notification system should notify users about issue status changes, task assignments, comments, mentions, and deadline reminders.
It should support in-app messages, email, and enterprise chat adapters.
Users should be able to configure preferences so they do not receive every possible event.

Reasonable non-functional requirements include:

- Notification latency within about three seconds for core events.
- Very high delivery reliability for assignments, mentions, and status changes.
- Support for 100,000 daily active users.
- Easy extension for new channels and notification types.
- Clear auditability so support teams can investigate missing messages.

Clarify that international SMS, marketing emails, and unrelated campaign messaging are out of scope unless requested.
The system should focus on product notifications triggered by collaboration events.

### High-Level Architecture

The core design should decouple event producers from notification delivery.
The issue service, comment service, and workflow service publish domain events.
The notification service consumes those events and decides who should receive what.

| Component | Responsibility |
| --- | --- |
| Event producer | Publishes status change, assignment, comment, mention, and deadline events |
| Kafka topic | Buffers durable events and separates producers from consumers |
| Notification generator | Converts events into notification objects |
| Preference service | Determines channels and suppression rules per user |
| Template service | Renders localized notification content |
| Channel adapters | Send email, in-app messages, and chat messages |
| Retry service | Handles failed delivery with backoff and dead-letter queues |
| Notification store | Records delivery status and user-visible in-app notifications |

This architecture protects the issue workflow from slow downstream providers.
If email is delayed, issue creation should still succeed.

### Core Notification Flow

The flow can be described in steps:

1. An issue event occurs, such as assignment or status change.
2. The source service writes its own transaction and publishes an event through an outbox pattern.
3. The notification consumer reads the event from Kafka.
4. The notification service expands recipients based on watchers, assignees, reporters, mentions, and project rules.
5. The preference service filters channels based on each user's settings.
6. The template service generates final content.
7. Channel adapters send the notification.
8. Delivery status is stored for troubleshooting and analytics.
9. Failed sends are retried with exponential backoff.
10. Permanently failed sends move to a dead-letter queue with enough metadata for investigation.

The outbox pattern is worth mentioning.
It prevents the common failure where the issue update commits but the notification event is lost.
The service writes the domain change and an outbox row in the same transaction, then a background publisher sends the event to Kafka.

### User Preference Module

A practical preference table can include user_id, tenant_id, notification_type, channel, enabled, quiet_hours, and updated_at.
Cache preferences in Redis for fast lookups, but update or invalidate the cache whenever users change settings.

Useful APIs include:

```text
GET /api/v1/notification-preferences/me
PUT /api/v1/notification-preferences/me
GET /api/v1/notifications?cursor=
PUT /api/v1/notifications/{notificationId}/read
```

Do not over-cache unread counts without a clear invalidation strategy.
Unread counts are user-visible and can quickly become a source of confusion if they drift.

### Channel Adapter Design

Use an adapter pattern so channels are isolated behind a common interface.
For example, email, in-app, and enterprise chat adapters can all implement a send method that accepts a normalized notification message.

The in-app adapter writes to the notification table and may push through WebSocket.
The email adapter sends through an email provider and records provider response IDs.
The chat adapter calls enterprise chat APIs and handles provider-specific rate limits.

When adding a new channel, you should not have to rewrite recipient expansion or preference filtering.
You should add a new adapter, configuration, monitoring, and tests for provider behavior.

### Reliability, Optimization, and Observability

Batch low-priority notifications when possible.
For example, multiple comment notifications on the same issue can be grouped into a digest within a short window.
Do not batch core events such as a direct assignment if the product promise requires immediacy.

Use separate Kafka partitions or topics for high-priority and low-priority events.
This prevents a flood of comment events from delaying assignment notifications.

Retries should use exponential backoff.
A failed email provider call can retry after 10 seconds, then 30 seconds, then one minute.
After a fixed number of attempts, the message can be moved to a dead-letter queue.

Track metrics such as event lag, delivery latency, provider error rate, retry count, dead-letter volume, and notification preference cache hit rate.
Add dashboards and alerts because notification systems fail in ways users notice quickly.

## Question 3: Design Real-Time Collaborative Documents Like Confluence

### Requirement Clarification

A Confluence-like collaborative document system should support multi-person editing, document version control, sharing, permissions, comments, and basic formatting.
For an interview, keep rich formatting simple unless the interviewer expands scope.
Focus on real-time text synchronization, versioning, reliability, and conflict resolution.

Reasonable requirements include:

- Multiple users can edit the same document at the same time.
- A document supports basic text formatting, lists, images, and attachments.
- Users can share documents with teams or specific people.
- The system records versions and supports rollback.
- The system handles up to 10 simultaneous editors on one document.
- Editing latency should stay below roughly 500 ms for common operations.
- The system should avoid data loss during disconnects and reconnects.

### High-Level Architecture

A practical architecture includes a WebSocket gateway, collaboration service, document service, version service, permission service, cache, relational storage, object storage, and message bus.

| Component | Responsibility |
| --- | --- |
| WebSocket gateway | Maintains live editing connections and broadcasts operations |
| Collaboration service | Orders operations, resolves conflicts, and updates live document state |
| Document service | Stores document metadata, permissions, and published content |
| Version service | Creates snapshots and rollback versions |
| Redis Cluster | Stores active sessions, presence, and short-lived document state |
| PostgreSQL | Stores document metadata, permissions, versions, and durable state |
| Object storage | Stores embedded images and attachments |
| Kafka | Publishes versioning, notification, search indexing, and analytics events |

The interviewer may ask whether to use Operational Transformation or CRDTs.
Either can be defended if you explain the trade-off.

### Operational Transformation Approach

Operational Transformation represents edits as operations such as insert, delete, retain, or format.
The server receives operations, transforms them against concurrent operations, and broadcasts the transformed result to connected clients.

A typical operation might look like this:

```json
{
  "docId": "doc_123",
  "userId": "user_456",
  "baseVersion": 42,
  "opType": "insert",
  "position": 10,
  "content": "design",
  "clientOperationId": "op_789"
}
```

The client can optimistically apply the edit locally and send it to the server.
The server checks the base version, transforms the operation if other edits already arrived, assigns a new server version, and broadcasts the accepted operation.
Other clients apply the operation to converge on the same document state.

For example, if User A inserts text at position 10 while User B deletes text before position 10, the server transforms User A's position so the insert lands in the intended logical place.
This is the core reasoning interviewers want to hear.

### CRDT Alternative

A CRDT-based design assigns stable identifiers to document elements so concurrent edits can merge without a central transform step.
This can be more resilient for offline-first editing and distributed collaboration.
The trade-off is additional metadata and implementation complexity.

A concise interview answer can say this:

- Use Operational Transformation for a server-centered collaborative editor with modest concurrent editors and simpler document structure.
- Use CRDTs if offline editing, peer-to-peer merging, or very resilient distributed collaboration is a major product requirement.

That comparison shows you know the design space without overcommitting to one buzzword.

### Version Control Module

The version system should store document history and support rollback.
A reasonable model includes:

| Table | Important fields | Purpose |
| --- | --- | --- |
| documents | id, tenant_id, title, creator_id, latest_version, created_at, updated_at, deleted_at | Store document metadata |
| document_versions | id, tenant_id, document_id, version, snapshot_ref, editor_id, change_summary, created_at | Store snapshots or snapshot references |
| document_operations | id, tenant_id, document_id, version, operation_json, user_id, created_at | Store operation history for replay or audit |
| document_permissions | id, tenant_id, document_id, principal_id, principal_type, permission_level | Store user, group, or team access |

Do not store a full copy after every keystroke.
Store operations continuously and create periodic snapshots.
For example, snapshot every N operations, every few minutes, or when the document is idle.
Rollback can create a new version based on an older snapshot rather than deleting history.
This preserves auditability.

### Disconnects, Reconnects, and Data Loss Prevention

WebSocket disconnections are normal.
Clients should send heartbeats and reconnect automatically.
On reconnect, the client sends its last acknowledged server version and any unsent local operations.
The server replies with missed operations or the latest snapshot if the gap is too large.

Use idempotent client operation IDs so retries do not duplicate edits.
Persist accepted operations before acknowledging them to clients.
This is important because losing an acknowledged edit is worse than making the user wait a little longer.

For large documents, load content in chunks or by blocks.
Prioritize the visible area and lazily load older sections, comments, or embedded assets.
Batch small operations when appropriate so broadcasts do not overwhelm the gateway.

### Permissions and Sharing

Collaborative documents require authorization on every meaningful action.
A user may be allowed to view a document but not edit it.
A user may be allowed to comment but not share it.
A user may temporarily join a live editing session but later lose access when group permissions change.

The WebSocket connection should be authorized when it starts and periodically revalidated for long sessions.
Permission changes should publish invalidation events so active sessions can be downgraded or disconnected.
This is a strong enterprise-product detail that interviewers often appreciate.

## Lessons From Candidate Experiences

Candidates often report that communication matters as much as architecture depth.
The interviewer needs to see your reasoning, not just the boxes on your diagram.
If you silently jump to Kafka, Redis, and PostgreSQL, you miss the chance to show product judgment.

Strong candidates tend to do the following:

- Restate the problem in their own words.
- Ask about scale, latency, consistency, and failure expectations.
- Define the main entities before drawing services.
- Start with a simple architecture, then scale the bottlenecks.
- Explain trade-offs instead of claiming one perfect answer.
- Use examples from Jira and Confluence to make the answer concrete.
- Leave time for reliability, monitoring, and follow-up questions.

A useful mindset is to treat the round as a collaborative design review.
You are not proving that you memorized one architecture.
You are proving that you can reason with a teammate under ambiguity.

## How to Practice With ExtraBrain

ExtraBrain can help you prepare for system design interviews by turning practice sessions into reviewable material.
You can rehearse a prompt out loud, capture the transcript, review where your structure became unclear, and generate follow-up questions for another practice round.

A responsible practice workflow looks like this:

1. Pick one prompt, such as designing Jira workflows or Confluence collaboration.
2. Set a timer for 35 to 45 minutes.
3. Talk through requirements, scale, APIs, data models, architecture, bottlenecks, and trade-offs.
4. Use ExtraBrain to review the transcript and identify missing pieces.
5. Rewrite your answer outline in your own words.
6. Repeat the same prompt later without reading the previous answer.

If you bring ExtraBrain into a live interview environment, first confirm that the rules allow the specific usage.
Some interviews allow notes or AI-assisted preparation but not live assistance.
Some workplaces allow meeting transcription only with consent.
The candidate remains responsible for honest and allowed use.

## A Repeatable System Design Answer Template

Use this template when practicing Atlassian-style prompts:

| Step | What to say | Why it matters |
| --- | --- | --- |
| Clarify scope | "Are we designing core issue tracking only, or also plugins and analytics?" | Prevents overbuilding |
| Define scale | "I will assume 100,000 DAU and 1,000 peak QPS unless you want a different target." | Makes trade-offs concrete |
| List entities | "The main entities are tenant, project, issue, workflow, user, permission, comment, and attachment." | Grounds the data model |
| Draw services | "I will separate issue, workflow, permission, notification, and reporting services." | Shows ownership boundaries |
| Design APIs | "The key APIs are create issue, update status, query issues, and add comment." | Connects architecture to user actions |
| Discuss storage | "PostgreSQL stores transactional data, Redis caches hot reads, and object storage holds attachments." | Shows data reasoning |
| Add async flows | "Kafka handles notifications, reports, search indexing, and audit events." | Protects core latency |
| Handle failures | "If reporting is down, issue creation still works." | Demonstrates resilience |
| Explain trade-offs | "This favors transactional consistency for issue state and eventual consistency for reports." | Shows judgment |

Practice until this structure feels natural.
Then adapt it to the prompt instead of reciting it mechanically.

## Common Follow-Up Questions

### How would you make issue search fast?

Start with indexed relational filters for basic queries.
For full-text search across title, description, and comments, publish issue events to a search index asynchronously.
Make the search index eventually consistent and keep PostgreSQL as the source of truth.

### How would you handle permission changes across cached data?

Keep permission checks centralized and include tenant_id in all access decisions.
Cache permission summaries with short TTLs and explicit invalidation events.
For sensitive reads, revalidate permissions before returning data even if the object itself came from cache.

### How would you design audit logs?

Write immutable audit events for important actions such as issue creation, status transition, permission change, workflow publication, document share, and rollback.
Store enough metadata to answer who did what, when, from where, and to which object.
Do not rely only on application logs because audit data is a product and compliance feature.

### How would you keep reports from slowing down the main product?

Use asynchronous event processing.
The core write path emits events, and reporting consumers update aggregates or analytical stores.
If report freshness can be a few seconds behind, the main issue workflow remains fast and reliable.

### How would you explain consistency trade-offs?

Use strong consistency for the current issue state, workflow transitions, permissions, and document operation ordering.
Use eventual consistency for notifications, search indexing, dashboards, and reports.
This maps consistency choices to user expectations.

## FAQ

### What should I focus on for Atlassian system design interviews?

Focus on product-shaped systems such as issue tracking, workflow engines, notifications, permissions, collaborative documents, search, and reporting.
Practice explaining scale assumptions, data models, API boundaries, and trade-offs.

### Do Atlassian system design interviews require frontend knowledge?

Some roles may include frontend collaboration details, especially for Confluence-style editing or rich client experiences.
Even backend candidates should understand how WebSocket updates, optimistic UI, pagination, and permission-aware rendering affect system behavior.

### How do I handle time pressure in the interview?

Use a fixed structure.
Clarify requirements, define scale, draw a high-level design, go deep on one or two modules, then close with bottlenecks and trade-offs.
If time runs out, tell the interviewer what you would address next.

### Can ExtraBrain generate system design answer outlines?

ExtraBrain can help generate answer outlines, technical explanations, clarifying questions, and follow-up prompts from live transcript and screen context.
You remain responsible for understanding the material and for using any AI assistance only where it is allowed.

### What is ExtraBrain?

ExtraBrain is a free, local-first Mac desktop AI interview assistant and meeting copilot with live transcription, screen-aware context, local Gemma 4 where installed and compatible, bring-your-own AI providers, and privacy controls.

### Can ExtraBrain run fully local for interview practice?

A fully local ExtraBrain posture requires local Parakeet transcription plus local Gemma 4 on-device AI where installed and compatible, with no external provider requests.
External providers may receive selected prompts, transcript text, screenshots, audio, or context depending on configuration.

## Related ExtraBrain Resources

- [ExtraBrain](https://extrabrain.app)
- [Responsible use](https://extrabrain.app/responsible-use/)
- [Privacy](https://extrabrain.app/privacy/)
- [AI providers](https://extrabrain.app/providers/)
- [Help center](https://extrabrain.app/help/)
