---
title: "Jane Street Interview Questions & Process (2026 Guide)"
description: "How Jane Street interviews work in 2026: commonly reported rounds, probability and mental-math questions, coding, what they look for, and how to prepare."
app: alex
subject: "Jane Street"
publishDate: 2026-07-14
keywords: ["jane street interview questions", "jane street interview process", "jane street probability questions", "jane street trading interview", "how to prepare for a jane street interview"]
---

Jane Street is one of the most selective quantitative trading firms in the world, and its interview process is famous for probability puzzles, fast mental math, and market-making games rather than resume-driven behavioral chat. Whether you're targeting Trading, Quantitative Research, or Software Engineering, the firm is looking for raw reasoning under uncertainty, comfort with expected value, and the ability to think clearly out loud while someone pushes back. Preparation here means drilling mental math and probability until they're reflexive — not memorizing answers.

## The Jane Street interview process

Jane Street recruits by track (Trading, Research, Software Engineering) and by level, so treat this as the commonly reported shape rather than a fixed script:

1. **Online application and resume screen.** Strong quantitative signals — math, CS, olympiads, competitive programming — are widely reported to matter more than pedigree alone.
2. **Online assessment or first phone screen.** Trading candidates commonly report probability and mental-math questions; software candidates report a coding assessment or algorithmic phone screen (often on OCaml-agnostic, language-of-your-choice terms for the interview itself).
3. **First-round interviews.** One or more calls heavy on probability, expected value, estimation ("how many … "), and quick arithmetic, or on data structures and algorithms for engineering roles. Interviewers are widely reported to care how you reason, not just the final number.
4. **Market-making / trading games.** A signature stage for trading and research candidates: interactive games where you quote bid-ask prices, update on new information, and manage risk in real time. This tests EV thinking, Bayesian updating, and composure under pressure.
5. **Final round / on-site (or virtual on-site).** Several back-to-back interviews mixing harder probability, brain-teasers, coding, and a market-making round, often with a couple of lighter conversational segments about how you think.
6. **Decision.** Feedback is commonly reported to move relatively quickly for a firm of this selectivity.

If you're recruiting across quant firms, our [Citadel interview guide](/alex/interviews/citadel/) and [Two Sigma interview guide](/alex/interviews/two-sigma/) cover closely related processes.

## Behavioral (and reasoning) questions Jane Street asks

Jane Street leans far more on reasoning than on classic behavioral prompts, but candidates do report a mix. Here's what's commonly reported and what each is really probing:

1. **A fair-coin or dice probability question** — Tests whether you can set up a clean probability model quickly instead of guessing.
2. **An expected-value bet ("would you take this bet, and at what price?")** — Probes whether you think in EV and can price uncertainty, the core of trading.
3. **A market-making game ("make me a market on X")** — Tests bid-ask reasoning, updating on new info, and risk management live.
4. **A Fermi estimation question ("how many … in … ?")** — Probes structured estimation and sensible assumptions, not a memorized figure.
5. **A conditional-probability / Bayes question** — Tests whether you update correctly when new evidence arrives.
6. **A quick mental-math sequence** — Probes fluency and accuracy under time pressure without a calculator.
7. **A brain-teaser or logic puzzle** — Tests creative problem decomposition when the path isn't obvious.
8. **"Walk me through how you'd think about this trade/problem."** — A reasoning-out-loud check; they want your process, including where you're uncertain.
9. **A coding / algorithms question (for SWE)** — Tests clean data-structure choices and correctness, often with follow-up optimizations.
10. **"Tell me about something you find intellectually interesting."** — One of the few genuinely behavioral prompts; probes curiosity and depth of thought.

The through-line: Jane Street rewards clear, honest reasoning under uncertainty far more than a confident wrong answer delivered smoothly.

## What Jane Street looks for

Stick to what the firm signals publicly. Jane Street describes a culture built on **curiosity, collaboration, and rigorous problem-solving**, and it is well known publicly for valuing how people reason over credentials. Interviewers are widely reported to reward candidates who think out loud, state their assumptions, revise gracefully when shown they're wrong, and stay calm when a game moves against them.

Practically, interviewers are listening for: fluent probability and expected-value reasoning; accurate, fast mental arithmetic; sound Bayesian updating; intellectual honesty about uncertainty; and clarity of thought under adversarial pressure.

## How to prepare

- **Drill mental math until it's reflexive.** Practice multiplication, fractions, percentages, and quick estimation without a calculator, daily, until speed and accuracy both hold up.
- **Master expected value and probability fundamentals.** Coin/dice problems, conditional probability, Bayes, and simple combinatorics should feel automatic. Then practice *pricing* bets, not just computing odds.
- **Play market-making games out loud.** Have a friend feed you "make a market on X," quote a spread, and update as they give you information. The verbal, adversarial practice is what transfers.
- **For SWE, drill data structures and algorithms.** Prioritize clean, correct solutions and clear reasoning over cleverness.
- **Rehearse thinking out loud under pressure.** The failure mode is going silent or freezing. Our guide on [how to prepare for an interview](/alex/blog/how-to-prepare-for-an-interview/) lays out a structured practice plan you can adapt to quant prep.

## A worked reasoning walkthrough

**Question: "I flip a fair coin until I get heads. What's the expected number of flips?"**

- **Set up:** "Let E be the expected number of flips. Each flip is heads with probability 1/2."
- **Reason out loud:** "With probability 1/2 I get heads on the first flip — that's one flip. With probability 1/2 I get tails, and then I'm back where I started, having used one flip. So E = 1/2·(1) + 1/2·(1 + E)."
- **Solve:** "That gives E = 1 + 1/2·E, so 1/2·E = 1, therefore E = 2."
- **Sanity-check:** "Two flips on average feels right for a fair coin — the answer is 2."

Notice the shape: define the variable, reason through the recursion out loud, solve cleanly, then sanity-check. Jane Street interviewers care as much about that transparent process as about landing on 2 — a candidate who states assumptions and checks their answer reads far stronger than one who blurts a number.

## FAQ

**Do I need to know OCaml for a Jane Street interview?**
No. Jane Street uses OCaml internally, but candidates commonly report that interview coding can be done in the language of your choice. Focus on clean reasoning and correctness, not the firm's stack.

**How much probability do I really need?**
A lot, and fluently. Expected value, conditional probability, Bayes, and quick combinatorics come up repeatedly for trading and research roles. The bar is reflexive comfort, not just recognition.

**What's a Jane Street market-making game?**
An interactive round where you quote a bid and an ask on some quantity, then update your prices as the interviewer reveals information or "trades" against you. It tests EV thinking, risk management, and composure live.

**How should I handle a question I can't immediately solve?**
Think out loud, state your assumptions, and show your reasoning. Candidates commonly report that a clear partial approach with honest uncertainty beats a confident guess. Freezing silently is the main failure mode.

---

The candidates who convert Jane Street rounds are the ones who've already reasoned through probability and market-making games out loud, under pressure, with someone pushing back. Alex runs realistic mock interviews — including quantitative reasoning practice, voice to voice — and gives you feedback on your thought process before the real one counts.
