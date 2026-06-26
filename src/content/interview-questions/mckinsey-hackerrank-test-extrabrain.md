---
title: "McKinsey HackerRank Test Questions: Format, Practice Plan, and Example Solutions"
seoTitle: "McKinsey HackerRank Test Questions, Format, and Prep Guide"
description: "Prepare for the McKinsey HackerRank test with question patterns, solution strategies, timing tips, SQL, algorithms, frontend, and API practice."
publishDate: 2026-03-18
updatedDate: ""
author: "ExtraBrain"
tags:
  - "McKinsey Interview"
  - "HackerRank Test"
  - "Coding Interview"
  - "SQL Interview"
seoTags:
  - "mckinsey-hackerrank-test"
  - "mckinsey-interview-questions"
  - "hackerrank-coding-assessment"
  - "mckinsey-sql-test"
sourceUrl: "exports/interview-questions/mckinsey-hackerrank-test.md"
canonicalUrl: "https://extrabrain.app/interview-questions/mckinsey-hackerrank-test-extrabrain/"
importedAt: "2026-06-25T21:42:40.768Z"
ogImage: "/assets/blog-covers/verve-ai-review-extrabrain.webp"
ogImageAlt: ""
draft: false
---

## McKinsey HackerRank test overview

A McKinsey HackerRank assessment can feel broad because it may test data handling, algorithms, SQL, web basics, and API work in one sitting.
The version described here had four questions and a tight time limit, so the main challenge was not only solving each problem but also deciding quickly where to spend time.
This guide rewrites that experience into an ExtraBrain-style preparation plan for candidates who want practical patterns, clean solution approaches, and responsible use of AI support.

Use this article as preparation material, not as a promise that your test will match the same questions.
McKinsey assessments can vary by role, region, hiring cycle, and team.
Always follow McKinsey, HackerRank, school, employer, and platform rules for AI assistance, notes, transcription, screenshots, and collaboration.

## Example questions and solution strategies

### SQL question: plants and weather types

One SQL task asked for the names of plants that thrive in only one type of weather, along with that weather type.
The data came from two tables, one for plants and one for weather.
The key relationship was between the plant species field and the weather plant species field.

A strong approach is to join the two tables, group by plant, and filter for plants that map to exactly one distinct weather type.
The central SQL idea is `COUNT(DISTINCT weather_type) = 1`.
That condition removes plants associated with multiple weather conditions.

A generic query shape might look like this:

```sql
SELECT
  p.name,
  MIN(w.type) AS weather_type
FROM plant p
JOIN weather w
  ON p.species = w.plant_species
GROUP BY p.name
HAVING COUNT(DISTINCT w.type) = 1;
```

The exact field names can differ, so read the schema carefully before writing the final answer.
If the platform provides sample data, test one plant with one weather type and one plant with multiple weather types before submitting.

### Graph question: connecting computers with cables

Another task described computers connected by cables into separate groups.
One operation allowed removing an existing cable and reconnecting it between another pair of computers.
The goal was to find the minimum number of operations needed to connect all computers, or return `-1` if it was impossible.

This is a classic connected-components problem.
Union-Find works well because it can merge computers into groups and count how many components remain.
Before doing anything else, check whether the number of cables is at least `n - 1`.
If there are fewer than `n - 1` cables, no amount of rewiring can connect all computers.

The solution logic is simple:

1. If the cable count is less than `n - 1`, return `-1`.
2. Use Union-Find to merge every connected pair.
3. Count the number of connected components.
4. Return `components - 1`.

Each operation can connect two separate components, so the minimum number of operations is one less than the component count.
This is the kind of problem where writing the invariant first can prevent overcomplication.

### Frontend question: create clickable buttons

A frontend task asked for vanilla JavaScript that adds 20 horizontally arranged buttons to a `div` with the id `button-container`.
Each button needed an id from `1` to `20`, and each click should alert the button index.

The main risk is a closure mistake if the loop variable is captured incorrectly.
Using `let` inside the loop keeps each index scoped correctly.
You can also store the value in a data attribute if you prefer.

```html
<div id="button-container"></div>

<script>
const container = document.getElementById('button-container');
container.style.display = 'flex';
container.style.gap = '8px';

for (let i = 1; i <= 20; i += 1) {
  const button = document.createElement('button');
  button.id = String(i);
  button.innerText = `Button #${i}`;
  button.addEventListener('click', () => alert(i));
  container.appendChild(button);
}
</script>
```

During a live assessment, keep frontend answers minimal and test them immediately.
First confirm that the container exists, then confirm that the buttons render, then confirm that clicking one button alerts the expected number.

### REST API question: paginated university data

A REST API task used a paginated university endpoint and required collecting information across multiple pages.
The important pattern was to fetch the first page, read `total_pages`, then loop through every page and aggregate fields from each response.

This style of question tests asynchronous control flow, response parsing, pagination, and edge-case handling.
The exact data transformation may vary, but the structure is usually the same.

```javascript
async function fetchUniversities() {
  const baseUrl = 'https://jsonmock.hackerrank.com/api/universities';
  const firstResponse = await fetch(`${baseUrl}?page=1`);
  const firstPage = await firstResponse.json();
  const results = [...firstPage.data];

  for (let page = 2; page <= firstPage.total_pages; page += 1) {
    const response = await fetch(`${baseUrl}?page=${page}`);
    const payload = await response.json();
    results.push(...payload.data);
  }

  return results;
}
```

If the prompt asks for filtering by country, ranking by count, or returning a specific university field, add that transformation after the aggregation step.
Separate fetching from processing so your code remains easy to debug.

## Likely McKinsey HackerRank format

The reported format had four total questions and about 100 minutes.
The questions covered SQL, graph logic, frontend JavaScript, and API data handling.
That mix is especially relevant for data engineering, analytics engineering, and technical roles that combine coding with practical data work.

Other candidates may see a different format.
Some versions may include two Python questions and two SQL questions with about 120 minutes.
Some versions may emphasize arrays, strings, joins, aggregations, or data cleaning instead of frontend work.
Treat the examples in this guide as representative practice patterns, not guaranteed exam content.

| Area | What it tests | Preparation focus |
| --- | --- | --- |
| SQL | Joins, grouping, aggregation, filtering | `GROUP BY`, `HAVING`, `COUNT DISTINCT`, joins, null handling |
| Algorithms | Connected components, arrays, strings | Union-Find, BFS, DFS, hash maps, sorting |
| Frontend | DOM manipulation and events | Vanilla JavaScript, event listeners, scoped loop variables |
| REST APIs | Pagination and data aggregation | `fetch`, async logic, JSON parsing, loops, edge cases |

## How to practice before the assessment

### Build a two-track study plan

Prepare on two tracks: coding fundamentals and practical data tasks.
Coding fundamentals cover arrays, strings, hash maps, sorting, graph traversal, and Union-Find.
Practical data tasks cover SQL joins, grouped aggregations, pagination, JSON processing, and small frontend scripts.

A balanced week of practice might include:

- Two SQL join and aggregation sessions.
- Two Python or JavaScript algorithm sessions.
- One API pagination exercise.
- One timed mock with four mixed questions.
- One review session where you rewrite weak solutions from scratch.

The goal is not to memorize one answer.
The goal is to recognize problem patterns quickly and produce correct code under time pressure.

### Simulate the time limit

Time pressure is often harder than the individual questions.
If you expect four questions, practice four-question sets with a strict timer.
A useful target is 25 to 30 minutes per question, with a few minutes reserved for final checks.

When practicing, force yourself to move on if you are stuck for too long.
Mark the blocker, submit any partial reasoning if allowed, and return later.
This prevents one difficult question from consuming the entire assessment.

### Practice with simple test cases first

Start each solution with the smallest meaningful test case.
For SQL, create a mental example with one matching row, one duplicate row, and one row that should be excluded.
For graph problems, test one already-connected graph, one disconnected graph with enough cables, and one impossible graph.
For API problems, test one page, two pages, and an empty data array.

Small tests reveal flawed assumptions faster than large examples.
After the simple cases work, add edge cases.

## Coding approach for McKinsey-style assessments

### Choose the language that fits the task

Use SQL when the input is relational and the prompt asks for a query.
Use Python or JavaScript when the prompt asks for general logic, arrays, strings, graphs, or API processing.
Use vanilla JavaScript for DOM tasks unless the prompt explicitly allows a framework.

Avoid switching languages mid-question unless you discover that you chose the wrong tool.
Most mistakes come from syntax uncertainty, not from language limitations.

### Keep code readable

Readable code is easier to debug under pressure.
Use clear variable names, keep functions short, and avoid clever one-liners that are hard to inspect.
If a piece of logic is tricky, split it into a named helper function.

For example, a simple helper is better than a dense expression when your nerves are high:

```python
def count_even_numbers(values):
    count = 0
    for value in values:
        if value % 2 == 0:
            count += 1
    return count
```

This style is not flashy, but it is reliable.
In timed assessments, reliable is usually better than clever.

### Debug in layers

Debugging should follow the path of the data.
First confirm that input parsing works.
Then confirm that the core transformation works.
Then confirm that the returned format matches the prompt exactly.

Use print statements or console output while debugging if the platform allows it.
Remove noisy output before final submission if the judge expects only the return value.
Check off-by-one errors, empty inputs, duplicate values, and sorted versus unsorted assumptions.

## Using ExtraBrain responsibly while preparing

ExtraBrain is a free, local-first Mac desktop AI interview assistant and meeting copilot with live transcription, screen-aware context, local Gemma 4 where installed and compatible, bring-your-own AI providers, and privacy controls.
For interview prep, it can help you practice explaining solutions, review mock interview transcripts, structure STAR answers, and analyze where your reasoning got stuck.

A responsible practice workflow looks like this:

1. Solve a practice question on your own first.
2. Talk through your reasoning aloud while ExtraBrain captures the session if your setup allows it.
3. Review the transcript afterward and identify unclear explanations.
4. Ask ExtraBrain for alternative solution outlines or edge cases.
5. Re-solve the problem without help to verify that you actually learned it.

ExtraBrain should be used only where interview, employer, school, workplace, and platform rules allow AI assistance, transcription, screenshots, or notes.
A fully local ExtraBrain posture requires local Parakeet transcription plus local Gemma 4 on-device AI where installed and compatible, with no external provider requests.
External providers may receive selected prompts, transcript text, screenshots, audio, or context depending on configuration.

## Final prep checklist

Before your McKinsey HackerRank test, make sure you can do these tasks without looking up syntax every few minutes:

- Write SQL joins with `GROUP BY` and `HAVING`.
- Use `COUNT(DISTINCT ...)` correctly.
- Implement Union-Find or BFS for connected components.
- Solve easy-to-medium array and string problems.
- Create DOM elements and attach event listeners in vanilla JavaScript.
- Fetch paginated API data and combine results.
- Test edge cases quickly.
- Explain your approach in plain English before coding.

If you can do those reliably under a timer, you are preparing for the real skill mix behind the assessment rather than only chasing leaked questions.

## FAQ

### How hard is the McKinsey HackerRank test?

The reported version was low-to-medium difficulty, but the time limit made it challenging.
Candidates should expect practical coding, SQL, data processing, and possibly role-specific tasks.
The exact difficulty can vary by position and hiring cycle.

### Can I retake the McKinsey HackerRank test if I do not pass?

Retake rules can depend on the application cycle, role, region, and recruiter guidance.
Do not assume that an immediate retake will be available.
Check the instructions from McKinsey or your recruiter before the assessment.

### What should I practice most for the McKinsey HackerRank test?

Prioritize SQL joins and aggregations, arrays, strings, hash maps, connected components, and paginated API processing.
If your target role includes frontend work, add vanilla JavaScript DOM practice.
Timed mixed-question practice is more useful than isolated untimed drills.

### Can ExtraBrain help me prepare for McKinsey technical interviews?

Yes, ExtraBrain can help with mock interviews, transcript review, explanation practice, coding walkthroughs, system design practice, and post-session review.
Use it for preparation and only use it during live assessments if all applicable rules allow that kind of assistance.

### What platforms does ExtraBrain support?

ExtraBrain is available for macOS today, including Apple Silicon and Intel Macs.
Windows and Linux are planned future platforms.

## See also

- [ExtraBrain AI interview assistant](https://extrabrain.app)
- [Responsible use of ExtraBrain](https://extrabrain.app/responsible-use/)
- [ExtraBrain privacy controls](https://extrabrain.app/privacy/)
- [ExtraBrain AI providers](https://extrabrain.app/providers/)
