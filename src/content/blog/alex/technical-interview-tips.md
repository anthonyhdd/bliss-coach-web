---
title: "Technical Interview Tips: How to Prepare and Perform"
description: "Technical interview tips that work across fields: how to think out loud, handle questions you can't answer, prep efficiently, and the basics of coding rounds."
app: alex
publishDate: 2026-07-13
keywords: ["technical interview tips", "technical interview preparation", "how to pass a technical interview", "coding interview basics", "whiteboard interview"]
---

The core of every technical interview — coding, systems, finance, data, engineering of any kind — is the same: think out loud, clarify the problem before solving it, and treat the session as a working conversation rather than an exam. Interviewers pass candidates whose reasoning they can follow and would want beside them on a hard problem, which means a clearly narrated 80% solution routinely beats a silent perfect one.

## What a Technical Interview Is Actually Testing

A technical interview is rarely a knowledge quiz, even when it looks like one. The interviewer is scoring three things:

- **Process.** How do you approach a problem you haven't seen? Do you clarify requirements, decompose, consider trade-offs, and check your work — or leap at the first idea?
- **Communication.** Can you explain your reasoning so a colleague could follow, challenge, and build on it? In the actual job, unexplained work is unusable work.
- **Depth honesty.** Do you know where your knowledge ends? Candidates who bluff past their edge fail the follow-up two questions later, and interviewers deliberately probe until they find the edge.

This is why "I don't know, but here's how I'd figure it out" is a scoring answer, and a memorized solution delivered in silence often isn't. The format varies by field — coding exercises, system design, case studies, financial modeling, take-home projects, whiteboard problem-solving — but the rubric underneath barely changes.

## Universal Tips (Any Field)

**1. Clarify before you solve.** The single highest-value habit. Restate the problem in your own words, ask what's in and out of scope, and confirm constraints: "Are we optimizing for speed or memory?" "Is this analysis for a one-time decision or a recurring report?" Interviewers often leave problems deliberately ambiguous to see whether you notice. Thirty seconds of clarification also buys your brain thirty seconds to think.

**2. Narrate continuously.** Your reasoning is the product. Say the naive approach first ("brute force would work like this, but it's slow because..."), name the trade-offs as you choose, and flag your uncertainty explicitly ("I think this edge case breaks it — let me check"). A silent five minutes feels like failure from the other chair even when your final answer is right.

**3. Start simple, then improve.** Get a working, correct, obvious solution before an elegant one. "Here's the straightforward version; now let me optimize the bottleneck" demonstrates judgment. Premature cleverness that collapses mid-interview demonstrates the opposite.

**4. When stuck, debug out loud instead of freezing.** Say exactly where you're stuck and what you've ruled out: "The recursion works for the base case but I'm losing state between calls — let me trace one iteration." Interviewers regularly nudge candidates who are stuck transparently, and never rescue candidates who go quiet. Asking for a hint costs a little; stalling silently costs the interview.

**5. Test your own work before declaring done.** Walk your solution through one normal input and one nasty one (empty input, zero, the boundary). Catching your own bug is worth more points than not having written it, because checking is the rarer skill.

**6. Handle the "I don't know" moment cleanly.** Every good loop finds your edge on purpose. The response is two beats: honest admission, then reasoning from what you do know. "I haven't used that in production. Based on how similar systems work, I'd expect X — and I'd verify by Y." That answer scores; a confident wrong answer is the worst outcome available.

## Preparing Efficiently

**Map the format first.** Ask the recruiter directly what the rounds are — most will tell you exactly: live coding vs. take-home, systems round, case study, domain deep-dive. Preparing for the wrong format is the most expensive mistake available, and big companies publish their loops in detail; the interview processes at [Google](/alex/interviews/google/) and [Amazon](/alex/interviews/amazon/) are documented enough that walking in blind is a choice.

**Practice under realistic conditions.** Reading solutions builds recognition, not performance. Solve problems with a timer, out loud, writing by hand or in a bare editor if that's the format. The gap between "I understood the solution" and "I produced it in 35 minutes while talking" is precisely the gap interviews measure.

**Refresh fundamentals over exotica.** Interviews overwhelmingly draw from the core of your field — for developers, arrays, hash maps, strings, trees, and basic complexity analysis appear constantly; graph coloring does not. For analysts, it's joins, aggregations, and metric reasoning. Depth on the common 20% beats coverage of the rare 80%.

**Prepare your war stories too.** Most technical loops include behavioral rounds, and technical candidates chronically under-prepare them. Have five or six structured stories ready — the [STAR method](/alex/blog/star-method-examples/) format works for "tell me about a hard bug" exactly as it does for "tell me about a conflict."

**Do a full dress rehearsal.** One timed mock interview — with a friend, a peer, or any tool that forces you to perform out loud under a clock — surfaces the gaps that silent study hides: rambling, freezing, narrating too little, testing too late.

## Coding Interview Basics

If your loop includes coding rounds, layer these on top of the universal tips:

- **State your approach and complexity before writing code.** "I'll use a hash map for lookups — O(n) time, O(n) space. Sound reasonable?" That checkpoint lets the interviewer redirect you before you invest twenty minutes, and asking for it is a positive signal, not a weakness.
- **Use your strongest language** unless the role demands otherwise. Fighting syntax steals attention from the problem, and interviewers at most companies are language-agnostic in generalist loops.
- **Name variables like a professional, even on a whiteboard.** `left`, `right`, `charCount` — not `x`, `y`, `z`. Sloppy naming reads as sloppy habits, and it genuinely makes your own bugs harder to spot under pressure.
- **Trace through a concrete example by hand** after writing — pick a short input and walk every line. This catches off-by-one and boundary errors, which are the most common bugs in interview code.
- **Know your complexity cold.** "What's the time complexity?" is near-universal, and hesitation on your own solution's cost undoes a correct implementation.
- **For take-homes:** respect the stated timebox, include a README explaining your decisions and trade-offs, and make it run on the first try. An evaluator who can't run your project stops evaluating.

## The Rest of the Loop Still Counts

Technical candidates lose winnable offers at the edges of the process. Three reminders:

**The behavioral rounds are scored, not decorative.** A brilliant systems round plus a "no signal" behavioral round is a rejection at most structured companies.

**Your questions are part of the evaluation.** "What does the on-call load look like?" "How does code review work here?" — technical-culture questions show you're evaluating them seriously. Arriving with none suggests the opposite; good options are in [questions to ask the interviewer](/alex/blog/questions-to-ask-interviewer/).

**Recover between rounds, not within them.** Bombing one round rarely kills a loop by itself — interviewers calibrate for bad days — but carrying the wreckage into the next round does. Reset at the break, and afterward read the situation with a clear eye rather than assuming the worst.

## FAQ

**What if I completely blank on a problem?**

Say so, then restart from structure: restate the problem, solve a smaller version of it, or describe the brute-force approach even if it's bad. Interviewers score recovery highly because real work is full of blank moments. The only unrecoverable move is silence followed by an excuse.

**How long should I prepare for a technical interview?**

For a familiar domain with rusty interview skills: two to four weeks of daily practice — an hour a day out loud beats weekend cram sessions. For a format you've never done (first systems design round, first case study), add time to learn the format itself, not just the material. If the interview is in three days, spend them on the highest-frequency fundamentals and one full mock, not new topics.

**Do I need to get the optimal solution to pass?**

Usually not. A correct working solution, clearly narrated, with an accurate analysis of its cost and a credible discussion of how to improve it, passes most rounds. What fails is an "optimal" solution the candidate can't explain, or a wrong solution the candidate never tested.

**Can I ask the interviewer for help?**

Yes — structured help-seeking is scored positively. "I'm deciding between two approaches: X is simpler, Y handles the scaling case. Do you care about scale here?" is collaboration. What's penalized is unfocused fishing ("am I close?") or needing a hint for every step.

**Are whiteboard interviews still a thing?**

In-person loops still use whiteboards, though shared editors (CoderPad and similar) now dominate. The medium changes less than people think: no compiler means the interviewer expects reasoning, not syntax perfection, in both. Practice at least once in whatever medium the recruiter tells you to expect — handwriting code is a genuinely different motor skill.
