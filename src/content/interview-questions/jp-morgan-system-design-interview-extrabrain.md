---
title: "How to Prepare for a JP Morgan System Design Interview in 2026"
seoTitle: "JP Morgan System Design Interview Questions, Framework, and Prep Tips"
description: "Prepare for JP Morgan system design interviews with finance-focused questions, tradeoffs, frameworks, and responsible ExtraBrain practice tips."
publishDate: 2026-02-18
updatedDate: ""
author: "ExtraBrain"
tags:
  - "JP Morgan Interview"
  - "System Design Interview"
  - "Financial Systems"
  - "Interview Prep"
seoTags:
  - "jp-morgan-system-design-interview"
  - "jp-morgan-interview-questions"
  - "financial-system-design"
  - "system-design-interview-prep"
sourceUrl: "exports/interview-questions/jp-morgan-system-design-interview.md"
canonicalUrl: "https://extrabrain.app/interview-questions/jp-morgan-system-design-interview-extrabrain/"
importedAt: "2026-06-25T21:32:27.426Z"
ogImage: "/assets/blog-covers/10-system-design-ai-era.webp"
ogImageAlt: "System design interview preparation for JP Morgan candidates"
draft: false
---

JP Morgan system design interviews are different from many consumer-tech system design rounds.
The strongest answers are not only about massive scale.
They are about correctness, auditability, security, operational risk, and communication under constraints.

A good candidate can design a payment gateway, trade processing pipeline, risk dashboard, or reporting system while explaining why a bank may choose boring, proven infrastructure over trendy architecture.
A great candidate can make tradeoffs explicit, ask compliance-aware clarifying questions, and show how the system behaves when a queue fails, a region goes down, or a transaction must be reconciled days later.

ExtraBrain is useful for preparing for this kind of interview because it helps you practice live explanation, capture mock interview transcripts, review your diagrams and answers afterward, and build a repeatable answer structure.
Use ExtraBrain only where interview, employer, school, workplace, meeting, and platform rules allow AI assistance, transcription, screenshots, or notes.

> Key takeaway: For JP Morgan system design, emphasize consistency, idempotency, audit trails, regulatory awareness, failure handling, and consultative communication.

## JP Morgan system design interview process

The exact process can vary by role, location, seniority, and team.
For software engineering and backend-oriented roles, candidates commonly see a mix of coding, system design, and behavioral or hiring-manager conversations.

| Stage | What it usually tests | How to prepare |
| --- | --- | --- |
| Technical screen or coding round | Data structures, algorithms, implementation clarity, and language fundamentals. | Practice medium-difficulty coding problems, explain tradeoffs out loud, and be ready for role-specific follow-ups such as Java concurrency or service design basics. |
| System design round | Architecture, scalability, reliability, data consistency, observability, security, and financial-domain judgment. | Practice payment, trading, ledger, risk, reporting, and internal-platform designs with clear requirements and failure modes. |
| Behavioral or hiring-manager round | Collaboration, ownership, judgment, communication, and alignment with business priorities. | Prepare examples about production incidents, stakeholder tradeoffs, risk management, and learning from ambiguity. |

The system design round is often scheduled as a 45 to 60 minute conversation.
Expect the interviewer to care less about drawing the fanciest distributed system and more about whether your design would be safe, operable, and explainable in a regulated financial environment.

### What interviewers look for

JP Morgan interviewers often look for engineering judgment that fits high-stakes systems.
You should be ready to discuss why strong consistency may matter more than availability for core ledgers, settlement flows, and payment authorization.
You should also be ready to identify parts of a system where eventual consistency is acceptable, such as analytics dashboards, notification views, or non-critical read models.

Strong candidates usually show these traits:

- **Consistency awareness:** You can explain ACID guarantees, idempotency, exactly-once goals, deduplication, and reconciliation.
- **Security-first thinking:** You include encryption in transit, encryption at rest, secrets management, authentication, authorization, and least-privilege access early in the design.
- **Audit readiness:** You design immutable logs, traceable state transitions, retention policies, and investigation workflows.
- **Operational excellence:** You cover monitoring, alerting, runbooks, failover, disaster recovery, backfills, and replay.
- **Consultative communication:** You ask clarifying questions, state assumptions, and recommend tradeoffs based on business risk.

Do not treat the system design round like a behavioral STAR answer.
Use a design framework instead: requirements, constraints, APIs, data model, high-level design, deep dive, failure modes, observability, and tradeoff summary.

## A finance-focused answer framework

A repeatable framework keeps your answer calm and structured.
It also helps you avoid spending 25 minutes on boxes and arrows before explaining the core risk.

### 1. Clarify requirements

Start by separating functional requirements from non-functional requirements.
For a bank, non-functional requirements are often the heart of the problem.
Ask about correctness, latency, throughput, audit retention, regions, data residency, regulatory reporting, and acceptable data loss.

Example clarification questions:

- Are we designing for retail payments, institutional payments, trading, risk, or reporting?
- Is the source of truth a ledger, an order book, an event log, or an external system?
- Is data loss ever acceptable?
- Do we prioritize low latency, strong consistency, availability, or regulatory auditability?
- Are there geographic restrictions for data storage or processing?
- What is the expected peak throughput and daily volume?

### 2. Define APIs and core events

Describe the system boundary before choosing storage or infrastructure.
For a payment system, you might define APIs for payment initiation, payment status, refund, reconciliation, and audit search.
For a trading system, you might define events such as order received, order validated, order routed, order executed, order rejected, and trade confirmed.

Keep API examples short and focused.
The interviewer wants to see that your interface supports idempotency, traceability, and clear state transitions.

### 3. Choose the source of truth

Financial designs usually need an explicit source of truth.
A relational database or ledger service may own balances and transaction state.
An append-only event log may own the history of state changes.
A cache may accelerate reads, but it should not become the authority for money movement.

When you choose a database, explain why.
PostgreSQL, Oracle, or another relational store may be a good answer for core ledgers because ACID transactions and constraints matter.
Kafka, Pulsar, or another event log may be a good answer for streaming events, replay, and decoupling.
Redis may be useful for caching, rate limiting, or fast lookup, but you should explain how it is recovered and reconciled.

### 4. Draw the high-level design

A clean financial-system design often has these components:

- Client or internal producer.
- API gateway or service entry point.
- Authentication and authorization layer.
- Validation and risk checks.
- Core domain service.
- Transactional database or ledger.
- Event bus for downstream processing.
- Audit log and data lake.
- Monitoring, alerting, and reconciliation jobs.

Do not overload the diagram with every tool you know.
Show the critical path first, then add supporting components.

### 5. Deep dive on the hardest risk

Pick the hardest part of the problem and go deep.
For a payment system, that may be preventing double charges.
For a trading platform, it may be order sequencing and fairness.
For reporting, it may be data lineage and reproducibility.
For risk dashboards, it may be handling late events while keeping the dashboard useful.

### 6. Close with failure modes

Always leave time for failure scenarios.
Discuss what happens if the database is slow, a message broker is unavailable, a downstream service times out, a region fails, or a duplicate request arrives.
Explain how you detect, recover, and prove correctness afterward.

## 8 JP Morgan system design interview questions

The following prompts are realistic practice cases for a finance-heavy system design round.
Use them to practice clear explanation, not memorized diagrams.

| Topic | Core challenge | What to emphasize |
| --- | --- | --- |
| Trade processing engine | Ingesting, validating, ordering, and persisting trades. | Sequencing, deduplication, audit logs, and replay. |
| Payment gateway | Moving money safely across clients, banks, and regions. | Idempotency, ACID updates, fraud checks, and reconciliation. |
| Real-time risk dashboard | Aggregating exposure across books, desks, and asset classes. | Streaming aggregation, freshness, late events, and alerting. |
| Regulatory reporting system | Producing accurate reports from large historical datasets. | Lineage, reproducibility, batch validation, and retention. |
| Market data platform | Distributing high-volume price updates to internal systems. | Low latency, normalization, backpressure, and fanout. |
| Portfolio analytics dashboard | Serving current and historical portfolio views. | Read models, access control, data lake design, and caching. |
| Secure internal API platform | Exposing internal tools safely to developers and analysts. | Authentication, authorization, rate limiting, and audit trails. |
| Reconciliation system | Comparing internal records with external systems. | Matching logic, exception workflows, retries, and evidence. |

### 1. Design a high-frequency trading platform

**Goal:** Build a platform that can receive, validate, route, and record a high volume of orders while preserving fairness and correctness.

**Key considerations:**

- Ultra-low latency for order intake and routing.
- Strict sequencing for orders that affect the same instrument or book.
- Backpressure when downstream exchanges or venues slow down.
- Durable persistence for order state and execution history.
- Failover and disaster recovery without losing accepted orders.

**Architecture highlights:**

- Use a thin gateway for authentication, authorization, validation, and request shaping.
- Partition order processing by instrument, account, or venue to reduce coordination overhead.
- Use an append-only event log for accepted order events and state transitions.
- Keep hot order-book state in memory where needed, with durable replay from the event log.
- Persist final state and audit history in a transactional store or event-sourced ledger.
- Add monitoring for latency percentiles, queue depth, rejected orders, and sequence gaps.

The most important explanation is not which message broker you pick.
The most important explanation is how the design prevents lost, duplicated, or incorrectly ordered orders.

### 2. Design a real-time risk management system

**Goal:** Track exposure across products, desks, regions, and counterparties in near real time.

**Key considerations:**

- High-volume transaction and market-data ingestion.
- Real-time aggregation with late or corrected events.
- Clear separation between operational dashboards and official risk records.
- Alerting for threshold breaches.
- Historical storage for investigation and model validation.

**Architecture highlights:**

- Ingest trades, positions, market data, and reference data through event streams.
- Normalize events into a canonical risk-event format.
- Use stream processing for rolling exposure calculations.
- Store current aggregates in a fast read store for dashboards.
- Store immutable raw events and normalized events in a data lake for replay.
- Use alerting rules with escalation paths for severe threshold breaches.

A strong answer explains that the dashboard can be eventually consistent while the underlying audit history remains complete and replayable.

### 3. Design a global payments gateway

**Goal:** Let clients initiate, track, and reconcile payments across currencies, rails, and regulatory zones.

**Key considerations:**

- Idempotency for payment creation and retry.
- Strong consistency for ledger updates.
- Fraud, sanctions, and compliance checks.
- Regional routing and data residency requirements.
- Settlement, reversal, refund, and reconciliation workflows.

**Architecture highlights:**

- Require an idempotency key for payment initiation.
- Validate payment requests before funds are reserved or transferred.
- Use a ledger service as the source of truth for balances and transaction state.
- Orchestrate payment state transitions with durable events.
- Separate synchronous authorization from asynchronous settlement and reconciliation.
- Store immutable audit records for each state transition.
- Use retry policies that are safe because operations are idempotent.

This is one of the best prompts for showing financial-system maturity.
Do not stop at "use microservices and Kafka."
Explain how the system prevents double charging, proves what happened, and recovers from partial failure.

### 4. Design a market data distribution system

**Goal:** Deliver normalized price feeds and market updates from multiple exchanges or providers to internal systems.

**Key considerations:**

- Low-latency ingestion and fanout.
- Normalization across different provider formats.
- Deduplication and sequence handling.
- Burst tolerance during market open, close, and news events.
- Replay for consumers that fall behind.

**Architecture highlights:**

- Ingest data through provider-specific adapters.
- Normalize updates into a canonical schema.
- Publish updates to partitioned streams by symbol, venue, or asset class.
- Use WebSockets, gRPC streaming, or internal subscriptions for consumers.
- Add a replay store for recent updates and a historical archive for research.
- Monitor dropped updates, lag, malformed messages, and provider health.

The key tradeoff is latency versus durability.
State which parts of the path are optimized for speed and which parts preserve a complete record.

### 5. Design a portfolio analytics dashboard

**Goal:** Give traders, advisors, or analysts current and historical views of portfolio performance.

**Key considerations:**

- Real-time position and price updates.
- Historical trend analysis.
- Access control by role, desk, region, or client.
- Auditability for viewed and exported data.
- Clear distinction between estimated and official values.

**Architecture highlights:**

- Use event streams for portfolio updates and market-data changes.
- Build read-optimized projections for dashboard queries.
- Store historical data in a lake using columnar formats such as Parquet.
- Use query engines such as Trino or similar tools for ad hoc analysis.
- Enforce RBAC or ABAC before returning portfolio data.
- Log access to sensitive reports and exports.

Interviewers may push you on whether the dashboard value must match the official book of record.
A strong answer says which values are estimates, which values are authoritative, and how users can tell the difference.

### 6. Design a data lineage and audit tracking system

**Goal:** Trace how financial data moves through ingestion, transformation, reporting, and downstream consumers.

**Key considerations:**

- Versioned metadata for datasets, jobs, schemas, and transformations.
- Immutable event history.
- Searchable lineage for audits and incidents.
- Integration with batch and streaming pipelines.
- Retention and access control.

**Architecture highlights:**

- Emit lineage events from ETL jobs, streaming jobs, and service writes.
- Store relationships among datasets, jobs, owners, and reports in a graph model.
- Store raw lineage events in immutable object storage.
- Index metadata for fast search by dataset, report, field, owner, or time range.
- Add change approvals for critical schemas and regulated reports.

The deep dive should cover how an auditor answers, "Which source records contributed to this report field?"

### 7. Design a secure API platform for internal tools

**Goal:** Expose internal services to developers, analysts, and operational teams without weakening security controls.

**Key considerations:**

- Authentication and authorization.
- Tenant, desk, region, and role boundaries.
- Rate limiting and abuse protection.
- Usage analytics and chargeback.
- Audit logs for sensitive operations.

**Architecture highlights:**

- Put an API gateway in front of internal services.
- Use SSO, OAuth2, SAML, or enterprise identity integration depending on the environment.
- Enforce authorization at both gateway and service layers for sensitive operations.
- Use Redis or a gateway-native mechanism for rate limiting.
- Store audit events for administrative actions and access to sensitive data.
- Track latency, error rates, throttling, and top consumers.

A good answer avoids assuming that internal users are trusted by default.
Internal platforms still need strong boundaries, observability, and traceability.

### 8. Design a batch reporting and reconciliation system

**Goal:** Generate daily transaction reports, reconcile records across systems, and surface exceptions for review.

**Key considerations:**

- Large-scale joins across transaction, ledger, reference, and external data.
- Retryable and reproducible batch jobs.
- Clear exception handling for mismatches.
- Audit-ready output and report retention.
- Backfill support when source data is corrected.

**Architecture highlights:**

- Use an orchestrator for scheduled pipelines and dependencies.
- Land source extracts in immutable storage with partitioning by date and source.
- Validate schema, completeness, and record counts before processing.
- Use distributed computation for large joins and aggregations.
- Store reconciliation results, exception queues, and reviewer decisions.
- Archive reports with version, input snapshot, job run ID, and approval metadata.

This prompt is less glamorous than a trading platform, but it is highly relevant for financial engineering.
Accuracy, evidence, and operational workflow matter more than fancy scaling claims.

## Preparation plan for JP Morgan system design

### Build financial-system vocabulary

You do not need to become a banker before the interview.
You do need enough vocabulary to ask better questions and avoid naive designs.

Focus on these concepts:

- ACID transactions.
- Strong consistency versus eventual consistency.
- Idempotency keys.
- Ledger entries and double-entry accounting basics.
- Reconciliation.
- Audit trails.
- Data retention.
- Data lineage.
- Fraud checks.
- Risk exposure.
- Settlement.
- Regulatory reporting.
- Data sovereignty.

When you practice, connect each concept to a design decision.
For example, idempotency is not a buzzword.
It is how a payment API can safely handle client retries without creating duplicate transfers.

### Practice architectural patterns that matter

JP Morgan system design questions often reward stable architectural patterns.
You should be able to explain when each pattern helps and what it costs.

| Pattern | Why it matters in financial systems | Common tradeoff |
| --- | --- | --- |
| Saga pattern | Coordinates distributed workflows such as payment processing without holding one global database lock. | Requires compensation logic and careful state modeling. |
| Two-phase commit | Provides stronger coordination across participants when supported and justified. | Can reduce availability and add operational complexity. |
| Circuit breaker | Prevents a failing downstream service from taking down the critical path. | Requires fallback behavior and careful alerting. |
| CQRS | Separates write correctness from read performance. | Adds projection lag and more moving parts. |
| Event sourcing | Preserves a complete sequence of state changes for replay and audit. | Requires careful schema evolution and snapshot strategy. |
| Strangler fig migration | Modernizes legacy systems gradually while reducing migration risk. | Requires routing, coexistence, and long-running compatibility work. |

Do not list patterns mechanically.
Use them to answer concrete risks.
If the interviewer asks about modernizing a payment monolith, the strangler fig pattern is useful because it lets you move one capability at a time while keeping the old system stable.

### Practice with a spoken framework

System design interviews are spoken reasoning exercises.
A candidate who knows the material but rambles can still underperform.

Use a timer and practice this flow:

1. Spend 5 minutes clarifying requirements and constraints.
2. Spend 5 minutes defining APIs, events, and the source of truth.
3. Spend 10 minutes drawing the high-level design.
4. Spend 15 to 20 minutes deep-diving on the hardest risk.
5. Spend 5 minutes covering failure modes, observability, and tradeoffs.
6. Spend the final minutes summarizing and inviting follow-up questions.

ExtraBrain can help during practice sessions by capturing your mock interview transcript and giving you material to review afterward.
Because ExtraBrain is a local-first Mac desktop AI interview assistant and meeting copilot, it can support live transcription, screen-aware context, local Gemma 4 where installed and compatible, bring-your-own AI providers, and privacy controls.
A fully local posture requires local Parakeet transcription plus local Gemma 4 on-device AI where installed and compatible, with no external provider requests.
External providers may receive selected prompts, transcript text, screenshots, audio, or context depending on your configuration.

Use those capabilities responsibly and only in allowed contexts.
For real interviews, confirm the rules before using any AI assistance, transcription, screenshots, or notes.

## Common mistakes to avoid

### Over-engineering the first answer

Many candidates start with a global microservice architecture before proving that the core transaction is correct.
For financial systems, start with the invariant.
Then scale the design around that invariant.

For a payment system, the invariant may be that a transfer cannot debit an account twice for the same client request.
For a trade system, the invariant may be that accepted orders have a durable sequence and traceable state.
For a report, the invariant may be that output can be reproduced from known inputs.

### Ignoring failure modes

A design that only works on the happy path is not enough.
Talk about retries, timeouts, dead-letter queues, replay, idempotency, backfills, failover, and manual review.

If a downstream service fails, explain whether the request blocks, queues, degrades, or fails safely.
If a duplicate request arrives, explain how it is detected.
If a region fails, explain what data may be stale and what data cannot be lost.

### Choosing trendy technology without a reason

A JP Morgan interviewer is unlikely to reward a tool choice just because it is popular.
Explain why the tool fits the requirement.

A relational database may be better than a document store for a core ledger.
A cache may improve read performance but should not be the source of truth for balances.
A stream processor may support real-time dashboards but should preserve replay and correction workflows.

### Forgetting the business goal

The system is not just a technical puzzle.
It supports risk control, client trust, operational efficiency, regulatory reporting, fraud prevention, or trading execution.

Tie your architecture back to the business goal.
For example, say, "Because preventing duplicate payments is the core risk, I would make the idempotency key and ledger write part of the same transactional boundary."

## Example answer structure for a payment prompt

Here is a compact example you can adapt in practice.

**Prompt:** Design a payment processing system for institutional clients.

**Clarify:** I would first ask whether this is domestic or cross-border, which payment rails are in scope, expected volume, latency expectations, compliance checks, and whether payment initiation must be strongly consistent with ledger reservation.

**Functional requirements:** Clients can initiate payments, check payment status, receive callbacks, cancel when allowed, and download reconciliation reports.

**Non-functional requirements:** The system must prevent duplicate payments, preserve audit history, support retries, encrypt sensitive data, and recover from downstream failures.

**Core API:** The payment creation API should require a client-generated idempotency key.
The response should return a payment ID and current state.
Retries with the same key should return the same result instead of creating a new payment.

**Data model:** I would model payments, ledger entries, state transitions, compliance decisions, and audit events.
The ledger should be the source of truth for financial movement.
State transitions should be append-only or otherwise auditable.

**High-level design:** The request enters through an API gateway, passes authentication and authorization, reaches a payment service, runs validation and compliance checks, reserves funds through the ledger service, publishes a payment event, and continues through asynchronous settlement and notification workflows.

**Deep dive:** To prevent duplicate payments, I would store the idempotency key with a unique constraint scoped to the client and operation.
The ledger reservation and idempotency record should be committed atomically.
If a downstream settlement provider times out, the system should move the payment to a pending or unknown state and reconcile through provider status checks rather than blindly retrying a non-idempotent operation.

**Failure modes:** If the event bus is down after the ledger commit, the system needs an outbox pattern or equivalent durable handoff so downstream settlement eventually receives the event.
If the settlement provider is down, the payment should remain in a recoverable state with alerting and retry.
If records disagree, reconciliation should produce an exception queue for operations review.

**Wrap-up:** This design optimizes for correctness, auditability, and safe recovery before raw speed, which is appropriate for a banking payment system.

## Using ExtraBrain for preparation

ExtraBrain is not a shortcut around understanding financial systems.
It is a practice companion for making your reasoning sharper.

You can use ExtraBrain before an interview to rehearse system design prompts, record mock interviews, review transcripts, and identify where your explanation became vague.
You can use it for system design rounds, coding interviews, behavioral interviews, meetings, lectures, and research calls where the rules allow.

The core ExtraBrain Mac app is free.
ExtraBrain Pro is $9.99 per month regular, $6.99 per month Founder pricing, $79 per year, or $149 Lifetime launch pricing.
External AI and transcription provider usage is billed separately by the providers users choose.

ExtraBrain is available for macOS today, including Apple Silicon and Intel Macs.
Windows and Linux are planned future platforms.
It supports local NVIDIA Parakeet transcription and optional Deepgram, with providers including Google Gemma 4 local AI, Anthropic, OpenAI, custom OpenAI-compatible endpoints, Claude Subscription, and Codex Subscription.
Local Gemma 4 requires installation and compatible hardware and may not be available on every Mac or customer environment.

The best preparation workflow is simple:

1. Pick one prompt, such as a payments gateway or risk dashboard.
2. Explain your design out loud with a timer.
3. Review the transcript and look for missing clarifying questions.
4. Redesign the same system with one new constraint, such as regional failover or stricter audit retention.
5. Summarize the final answer in five bullets.

## Final tips for the JP Morgan system design interview

Keep your answer practical.
A bank cares about systems that can be operated, audited, secured, and recovered.

Use these habits in every answer:

- State assumptions before solving.
- Make consistency and availability tradeoffs explicit.
- Identify the source of truth.
- Explain idempotency for retryable operations.
- Include audit logs and reconciliation.
- Mention access control and encryption early.
- Discuss monitoring, alerting, and runbooks.
- Avoid claiming that any distributed system is perfectly exactly-once without explaining boundaries.
- Summarize your recommendation at the end.

If you get stuck, slow down and restate the core risk.
For example, say, "I want to make sure we do not double process a payment, so I am going to anchor the design around idempotency and a transactional ledger write."
That kind of sentence shows judgment and gives you a path back into the answer.

## FAQ

### What should I do if I get stuck during the JP Morgan system design interview?

State your assumptions and choose a safe next step.
For example, you can say, "I am assuming consistency is more important than availability for this ledger operation.
If that is correct, I would choose a transactional source of truth and make downstream workflows asynchronous."

### Do I need deep finance experience to pass?

You do not need to know every internal banking detail.
You should understand the basics of ledgers, payments, trade processing, audit trails, reconciliation, security, and regulatory constraints.
The goal is to show that you can learn the domain and make safe engineering tradeoffs.

### What topics should I practice first?

Start with payments, ledgers, trade processing, risk dashboards, regulatory reporting, market data, and reconciliation.
These topics force you to discuss consistency, idempotency, auditability, latency, and failure recovery.

### How should I manage time in a 60 minute system design interview?

Spend the first few minutes clarifying requirements, then move quickly into APIs, data model, high-level design, and the main deep dive.
Leave time at the end for failure modes and a concise tradeoff summary.
Practicing with a stopwatch is one of the fastest ways to improve.

### Can ExtraBrain generate system design answers?

ExtraBrain can help generate answer outlines, technical explanations, follow-up questions, and review notes from live transcript and screen context.
Candidates remain responsible for understanding the material, communicating honestly, and using AI only where interview and platform rules allow.

### What is the most important system design concept for banking interviews?

There is no single concept, but idempotency is one of the highest-value ideas to master.
It appears in payment retries, order submission, event processing, reconciliation, and API design.
Pair it with a clear source of truth and audit trail.

## See also

- [ExtraBrain responsible use](https://extrabrain.app/responsible-use/)
- [ExtraBrain privacy controls](https://extrabrain.app/privacy/)
- [ExtraBrain AI providers](https://extrabrain.app/providers/)
- [Download ExtraBrain](https://extrabrain.app/download/)
- [ExtraBrain pricing](https://extrabrain.app/pricing/)
