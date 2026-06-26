---
title: "Anthropic London Interview Process Guide for Research Engineer and SDE Candidates"
seoTitle: "Anthropic London Interview Process Guide: Timeline, OA, Coding, System Design"
description: "Candidate-style guide to Anthropic London interview stages, timelines, safety-focused technical prep, and responsible AI interview practice."
publishDate: 2026-02-17
updatedDate: ""
author: "ExtraBrain"
tags:
  - "Anthropic Interview"
  - "London Tech Interviews"
  - "AI Research Engineer"
  - "System Design"
seoTags:
  - "anthropic-london-interview-process"
  - "anthropic-research-engineer-interview"
  - "anthropic-coding-interview"
  - "ai-safety-interview-prep"
sourceUrl: "exports/interview-questions/anthropic-london-interview-process-guideline.md"
canonicalUrl: "https://extrabrain.app/interview-questions/anthropic-london-interview-process-guideline-extrabrain/"
importedAt: "2026-06-25T18:37:13.152Z"
ogImage: "/assets/blog-covers/personal-interview-knowledge-base-job-search.webp"
ogImageAlt: ""
draft: false
---

This guide rewrites a candidate-style account of the Anthropic London interview process for readers preparing for Research Engineer, software engineering, and AI safety engineering roles.
It is not an official Anthropic document, and individual loops can change by role, level, team, recruiter, and hiring season.
Use it as a practical preparation map, then confirm current logistics, tool rules, and assessment requirements with your recruiter.

The original account came from a PhD candidate in computer science with an AI and machine learning focus at University College London.
The candidate applied for a Research Engineer role in London after noticing Anthropic's European growth plans and reached the final round.
Their experience suggested that the London process was broadly similar to North American Anthropic loops, with extra attention to collaboration style, leadership signals, and mission alignment.

ExtraBrain can help you prepare for this kind of loop by turning practice sessions, mock interviews, coding walkthroughs, and system design rehearsals into searchable transcripts and review notes.
Use AI assistance only where interview, employer, school, workplace, and platform rules allow transcription, screenshots, notes, or AI support.

## Quick takeaways

- Expect a process that can span roughly 6 to 8 weeks for research-heavy roles, though the exact timeline can vary.
- Prepare for technical depth in Python, algorithms, machine learning, AI safety, and distributed systems.
- Be ready to explain research projects with concrete personal contributions, tradeoffs, failures, and collaboration details.
- Study Anthropic-relevant topics such as Constitutional AI, RLHF, model evaluation, interpretability, harmlessness, helpfulness, honesty, and reward hacking.
- Practice coding problems that look like real AI safety engineering tasks rather than generic toy algorithms.
- Practice system design at the level of large-scale training, evaluation, deployment, monitoring, rollback, and auditability.
- Treat leadership and values alignment as part of the technical signal, not as a separate soft-skills afterthought.

## Anthropic London office logistics

The candidate described Anthropic's London office as being at 107 Cheapside in the City of London area.
From University College London, their route involved taking the Circle Line from Euston Square to Moorgate and then walking the remaining distance.
If you are invited onsite, confirm the exact address, entrance instructions, visitor requirements, and meeting schedule with recruiting because office details can change.

London onsite logistics are worth planning carefully.
Give yourself buffer time for Tube delays, building check-in, weather, and a quiet reset before the first round.
If you are traveling from outside London, ask whether the day includes lunch, breaks, ID checks, or multiple buildings.

## Candidate-reported interview timeline

The candidate described a flexible research hiring cycle with applications open outside a single university recruiting window.
They submitted an application in December and completed screens, assessment, virtual onsite rounds, and follow-up steps through January and February.

| Stage | Candidate-reported date | Format | Focus |
| --- | --- | --- | --- |
| Application | 2025-12-18 | Online application | Resume, research fit, role fit |
| Initial screen | 2026-01-22 | Roughly 40 minutes | Projects, research background, role alignment |
| Online assessment | 2026-02-04 | Roughly 90 minutes | Coding plus theoretical AI and math questions |
| Virtual onsite | 2026-02-10 | Four 60-minute rounds | Coding, system design, culture, leadership |
| HR feedback | 2026-02-19 | Recruiter follow-up | Feedback, next steps, possible additional manager conversation |

The reported virtual onsite included two coding rounds, one system design round, and one culture or leadership round.
The candidate also described a follow-up senior manager conversation after positive feedback, with leadership development called out as an area to strengthen.
That extra conversation may not be universal, but it is a useful reminder that seniority, independence, and collaboration can matter strongly in London loops.

## Application review and resume positioning

The candidate's background was unusually aligned for an Anthropic Research Engineer role.
They had PhD work in AI alignment and interpretability, plus prior internships related to LLM alignment and safety evaluation.
They highlighted Constitutional AI methods, RLHF, interpretability, model evaluation, and scalable engineering work.

For a research engineering resume, avoid describing yourself only as a model user or paper reader.
Anthropic-style research engineering interviews tend to reward evidence that you can move between theory, implementation, debugging, evaluation, and production constraints.

Strong resume signals include:

- Implementing neural network architectures and training loops without relying only on libraries as black boxes.
- Debugging model behavior by reasoning through losses, data distributions, evaluation metrics, and failure modes.
- Reading recent papers, reproducing results, and identifying where assumptions break in practical systems.
- Translating research ideas into maintainable, testable, scalable systems.
- Reasoning clearly about safety, misuse, interpretability, monitoring, and societal impact.
- Explaining team collaboration, research disagreements, and project ownership without exaggerating your role.

A practical way to prepare is to build a portfolio story for each major project.
For each project, prepare the problem, why it mattered, your specific contribution, the technical design, the hardest failure, the evaluation method, the safety or reliability concerns, and what you would change now.

## Initial screening round

The initial screen in the candidate account focused on technical and research background.
It also tested whether the candidate understood Anthropic's mission and could reason about AI safety beyond buzzwords.

Expect questions like:

- What do you know about AI safety and alignment?
- Which AI safety issue do you think is especially important, and how might researchers address it?
- What is Constitutional AI, and what problem is it trying to solve?
- Explain RLHF at a practical level.
- What challenges can appear when RLHF is used in real systems?
- Describe one representative research project.
- What problem did the project address?
- What was your specific contribution?
- How did you collaborate with other researchers or engineers?
- How would you evaluate whether a language model is honest?
- What factors would you control in that evaluation?
- Which programming languages and deep learning frameworks do you use most?
- How do you think about AI risk as a researcher or engineer?
- How do you stay current in a fast-moving AI field?
- What do you want from the Research Engineer role?
- Where do you want to develop over the next 3 to 5 years?
- If you joined a team and noticed unsafe behavior on a narrow input class, what would you do first?

### How to answer the screening questions

The strongest answers are specific, structured, and grounded in experience.
For example, do not just say that RLHF can cause reward hacking.
Explain a concrete reward model failure, how you would detect it, what offline and online evaluations you would run, and how you would change the training or deployment pipeline.

For project questions, avoid a long literature review.
Use a compact structure: goal, constraint, method, your contribution, result, failure mode, and lesson learned.
ExtraBrain can help during preparation by recording mock answers, generating follow-up questions from your transcript, and helping you identify where your story becomes vague.

## Online assessment structure

The candidate described a 90-minute online assessment with one coding question and two theoretical questions.
They characterized it as difficult and noted that partial correctness may not be enough for competitive progress.
Treat that as a candidate report rather than a universal rule, and always follow the assessment instructions you receive.

The coding portion was not just about algorithms.
It also tested object-oriented design, modularity, ranking logic, extensibility, data structures, and product-aware thinking around AI safety.
The theory portion touched on mathematical foundations such as KL divergence, optimization, RLHF behavior, and reward hacking.

### Example coding theme: Constitutional AI preference ranking

One reported coding task involved ranking model outputs against weighted constitutional principles such as harmlessness, helpfulness, and honesty.
The candidate needed to design a class that could score responses, sort them, support top-k retrieval, and allow dynamic addition of new evaluation criteria.

A simplified input looked like this:

```text
responses = [
  {"id": 1, "text": "I can help you with that task...", "scores": {"harmlessness": 0.9, "helpfulness": 0.8, "honesty": 0.85}},
  {"id": 2, "text": "I'm not sure about that...", "scores": {"harmlessness": 0.95, "helpfulness": 0.6, "honesty": 0.9}},
  {"id": 3, "text": "Here's a detailed explanation...", "scores": {"harmlessness": 0.8, "helpfulness": 0.95, "honesty": 0.9}}
]

principles = {
  "harmlessness": 0.4,
  "helpfulness": 0.35,
  "honesty": 0.25
}
```

A clean solution should show that you can normalize weights, compute weighted scores, handle missing values, support custom evaluators, return explanations, and avoid inefficient full sorting when only the top results are needed.

```python
import heapq
from typing import Callable


class ConstitutionalRanker:
    def __init__(self, principles: dict[str, float]):
        self.principles = dict(principles)
        self.custom_evaluators: dict[str, Callable[[str], float]] = {}
        self._normalize_weights()

    def _normalize_weights(self) -> None:
        total = sum(weight for weight in self.principles.values() if weight > 0)
        if total == 0:
            raise ValueError("At least one principle must have a positive weight")
        self.principles = {
            name: max(weight, 0) / total
            for name, weight in self.principles.items()
        }

    def add_custom_evaluator(self, name: str, weight: float, evaluator: Callable[[str], float]) -> None:
        if weight <= 0:
            raise ValueError("Evaluator weight must be positive")
        self.principles[name] = weight
        self.custom_evaluators[name] = evaluator
        self._normalize_weights()

    def score(self, response: dict) -> float:
        score = 0.0
        response_scores = response.get("scores", {})
        text = response.get("text", "")
        for principle, weight in self.principles.items():
            if principle in response_scores:
                value = response_scores[principle]
            elif principle in self.custom_evaluators:
                value = self.custom_evaluators[principle](text)
            else:
                value = 0.0
            score += weight * min(max(float(value), 0.0), 1.0)
        return score

    def rank(self, responses: list[dict], include_scores: bool = False) -> list[dict]:
        ranked = sorted(responses, key=self.score, reverse=True)
        if not include_scores:
            return ranked
        return [dict(response, constitutional_score=self.score(response)) for response in ranked]

    def top_k(self, responses: list[dict], k: int) -> list[dict]:
        if k <= 0:
            return []
        scored = ((self.score(response), index, response) for index, response in enumerate(responses))
        best = heapq.nlargest(k, scored)
        return [response for _, _, response in best]
```

In an interview, the code is only part of the answer.
Explain why each design choice matters.
For example, normalizing weights prevents configuration mistakes, clamping scores protects downstream ranking, top-k retrieval improves efficiency for large batches, and custom evaluators make the system extensible.

### Theory question theme: RLHF optimization

The theory question reportedly focused on RLHF optimization, KL divergence, and reward hacking.
A strong answer connects the math to system behavior.
KL penalties are not just formulas; they help keep a fine-tuned policy from drifting too far from a reference model.
Reward hacking is not just a definition; it is a failure mode where a model learns to maximize the reward signal while violating the intended objective.

Prepare to explain:

- Why RLHF needs a reward model and where that reward model can be wrong.
- How KL divergence can constrain policy updates.
- Why too much constraint can limit learning and too little constraint can produce unstable behavior.
- How preference data quality affects the final model.
- How to detect reward hacking with adversarial examples, red-team data, human review, and held-out evaluations.
- How monitoring should continue after deployment.

## Virtual onsite coding rounds

The candidate described two 60-minute coding rounds.
The problems were safety-engineering flavored rather than purely algorithmic.
They tested whether the candidate could turn research ideas into reliable software components.

### Example round: response safety filter

One reported task was to design and implement a `ResponseSafetyFilter` class.
The class needed to support multiple safety rules, dynamic addition of new checks, a 0 to 1 safety score, detailed safety reports, configurable strictness, and caching for efficiency.

The safety dimensions included harmful content, bias, privacy leakage, misleading information, and inappropriate recommendations.
A strong design would separate rule definitions, scoring, report generation, policy thresholds, and caching.
It would also make clear that automated filters should support human judgment rather than replace careful safety review.

Good discussion points include:

- How rules are registered and versioned.
- How conflicting safety signals are combined.
- How strictness levels change thresholds.
- How false positives and false negatives are measured.
- How privacy-sensitive content is handled.
- How cache keys avoid reusing stale results after rule changes.
- How reports help auditors understand a decision.

### Example round: simplified Constitutional AI training pipeline

The second reported task involved designing a simplified Constitutional AI training pipeline.
The goal was to define principles, generate or curate training data, train or fine-tune a model, evaluate outputs, and iterate based on failures.

Even if you are not asked to build a full pipeline, practice explaining the components:

- Principle definitions and policy ownership.
- Data collection, filtering, labeling, and provenance tracking.
- Supervised learning or preference model stages.
- RL or preference optimization stages.
- Safety evaluation and regression test suites.
- Experiment tracking and model versioning.
- Deployment gates and rollback triggers.
- Post-deployment monitoring and incident review.

The key signal is not memorizing a specific Constitutional AI diagram.
The key signal is showing that you can reason about safety, engineering reliability, and research iteration as one system.

## System design interview

The candidate's system design prompt was to design a large-scale Constitutional AI training and deployment system.
The interviewer framed the system as supporting training, evaluation, deployment, and continuous improvement for Constitutional AI models.
The system needed to handle parallel training, large data and feedback volumes, real-time safety monitoring, controlled rollout, and explainability.

A strong answer should first clarify scope.
Ask whether the design is for research experimentation, production training, inference deployment, or all three.
Then separate functional requirements from non-functional requirements.

### Functional requirements

- Support supervised learning, reinforcement learning, and Constitutional AI style training stages.
- Ingest and process human feedback, synthetic evaluations, red-team data, and production safety signals.
- Run multidimensional evaluations for harmlessness, helpfulness, honesty, privacy, bias, robustness, and jailbreak resistance.
- Version datasets, prompts, reward models, checkpoints, evaluation suites, and release decisions.
- Provide dashboards for training health, safety metrics, drift, regressions, and deployment status.
- Support A/B tests, canary rollouts, gradual expansion, rollback, and audit trails.
- Give researchers fast iteration loops without bypassing safety gates.

### Non-functional requirements

- Scalability for very large models, high-volume data processing, and concurrent experiments.
- Reliability for long-running training jobs and production serving.
- Observability across data pipelines, training infrastructure, evaluation jobs, and inference systems.
- Reproducibility through immutable datasets, configuration snapshots, lineage tracking, and deterministic evaluation where possible.
- Security and privacy controls for sensitive prompts, user feedback, labels, and model outputs.
- Explainability and auditability for safety decisions and release approvals.

### Architecture sketch

A clear architecture can be organized into six layers.

| Layer | Purpose | Example components |
| --- | --- | --- |
| Data layer | Collect and govern input data | Feedback ingestion, red-team data, data lake, privacy filters, lineage store |
| Training layer | Run model improvement loops | Distributed training, checkpointing, experiment scheduler, GPU orchestration |
| Evaluation layer | Measure quality and safety | Automated evals, adversarial tests, human review queues, regression suites |
| Release layer | Control deployment | Model registry, approval workflow, canaries, A/B tests, rollback manager |
| Monitoring layer | Detect failures in production | Safety monitors, drift detection, latency metrics, incident alerts |
| Audit layer | Preserve accountability | Decision logs, dataset versions, evaluation reports, policy mappings |

For deeper follow-up questions, expect discussion of data parallelism, tensor parallelism, pipeline parallelism, straggler mitigation, checkpoint recovery, GPU utilization, training instability, and rollback criteria.
Do not try to sound impressive by listing every distributed systems term you know.
Tie each mechanism to a concrete bottleneck or risk.

## Culture, leadership, and mission alignment

The candidate reported that culture and leadership conversations focused on safety-first development, AI alignment, and long-term beneficial AI.
For Anthropic-style interviews, values alignment is usually not a scripted speech about liking safe AI.
It is demonstrated through how you reason when safety, speed, product value, and research uncertainty collide.

Prepare stories where you:

- Changed your mind because of evidence.
- Raised a concern respectfully and helped resolve it.
- Balanced shipping pressure against reliability or safety risk.
- Collaborated across research, engineering, policy, or product functions.
- Took ownership after a technical mistake.
- Communicated uncertainty clearly to non-specialists.

If you receive feedback that leadership needs development, ask for specifics.
It may refer to project ownership, decision clarity, cross-functional communication, mentoring, or comfort operating without a precise specification.

## How to prepare with ExtraBrain

ExtraBrain is a free, local-first Mac desktop AI interview assistant and meeting copilot with live transcription, screen-aware context, local Gemma 4 where installed and compatible, bring-your-own AI providers, and privacy controls.
For Anthropic interview preparation, it can work as a focused second-brain-style workspace for mock interviews, technical explanations, STAR stories, system design practice, and post-session review.

Useful preparation workflows include:

- Record yourself explaining Constitutional AI, RLHF, KL divergence, reward hacking, and interpretability.
- Ask ExtraBrain to turn the transcript into gaps, unclear claims, and follow-up questions.
- Practice coding walkthroughs aloud while explaining invariants, edge cases, complexity, and tradeoffs.
- Rehearse system design prompts with a timer and review whether you clarified requirements before jumping into architecture.
- Build a project story bank with problem, impact, your contribution, tradeoffs, evidence, and lessons.
- Review transcripts after mock interviews to identify rambling, weak transitions, and unsupported claims.

A fully local ExtraBrain setup requires local Parakeet transcription plus local Gemma 4 on-device AI where installed and compatible, with no external provider requests.
If you configure external providers, selected prompts, transcript text, screenshots, audio, or context may be sent to those providers depending on your settings.
Always choose a setup that matches your privacy needs and the rules of the context where you are using it.

## Responsible use during interviews and assessments

Do not assume that AI tools are allowed during a live interview, coding assessment, school assessment, or employer evaluation.
Some processes allow your own IDE, notes, documentation, or selected tools, while others prohibit AI assistance or transcription.
Ask your recruiter or read the assessment rules before using any assistant.

ExtraBrain should be used only where the relevant rules allow AI assistance, transcription, screenshots, or notes.
A responsible use pattern is to use ExtraBrain heavily for preparation, mock interviews, debriefs, and personal review, then follow the exact rules for the actual interview.
If AI assistance is allowed, be transparent when required and make sure you can explain every answer in your own words.

## FAQ

### What should I wear for an Anthropic London onsite interview?

Smart casual is usually a safe choice for a London tech interview.
Choose something neat, comfortable, and simple enough that you can focus on the conversation rather than the outfit.
If you are unsure, ask the recruiter whether the day is formal, casual, or mixed with external meetings.

### Can I use AI tools during an Anthropic coding assessment?

Do not assume AI tools are allowed.
Follow the written assessment rules and ask the recruiter if anything is unclear.
Even when a company allows your own development environment or selected tools, you still need to explain your reasoning, tradeoffs, and code clearly.

### Does Anthropic sponsor visas for international candidates?

Visa support can depend on role, location, timing, and candidate circumstances.
If you need sponsorship, raise it early with the recruiter so expectations are clear before late-stage interviews.
Bring any requested identity documents only when recruiting or onsite instructions ask for them.

### What topics should I focus on when preparing?

Focus on Python, algorithms, machine learning fundamentals, distributed systems, system design, and practical AI safety.
Review Constitutional AI, RLHF, KL divergence, reward hacking, interpretability, model evaluation, privacy, and monitoring.
Also prepare research and leadership stories that show ownership, collaboration, and careful reasoning under uncertainty.

### How do I handle job search anxiety?

Anxiety is normal for high-stakes AI interviews.
Reduce uncertainty by practicing full-length mock rounds, writing down project stories, and reviewing your own transcripts.
ExtraBrain can help you debrief practice sessions so you can convert anxiety into a concrete preparation plan.

### What happens if I do not pass a stage?

If you do not pass, ask politely whether the recruiter can share feedback or a suggested reapplication timeline.
Some teams provide only limited feedback, but any signal about coding, system design, research depth, or communication can guide your next preparation cycle.
Treat each interview as data rather than as a final judgment on your ability.

## See also

- [Anthropic interview process overview](https://extrabrain.app/interview-questions/anthropic-interview-process-extrabrain/)
- [Anthropic interview questions guide](https://extrabrain.app/interview-questions/anthropic-interview-questions-extrabrain/)
- [Anthropic coding interview preparation](https://extrabrain.app/interview-questions/anthropic-coding-interview-extrabrain/)
- [Anthropic concurrency interview preparation](https://extrabrain.app/interview-questions/anthropic-concurrency-interview-extrabrain/)
- [AI interview prep with ExtraBrain](https://extrabrain.app/interview-questions/ai-interview-prep-extrabrain/)
