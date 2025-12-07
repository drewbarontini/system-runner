# System Runner

*A TypeScript framework for defining, executing, and iterating systems as stepwise functions.*

System Runner turns everyday systems—product processes, team rituals, personal workflows, operational runbooks —into **typed, inspectable, runnable functions**.

- Write a system like a function.
- Run it like a guided sequence.
- Refine it as your environment evolves.

System Runner brings structure to the fluid work of modern teams and individuals.

## Why System Runner?

Most processes hide inside docs, wikis, tribal memory, or Slack threads.
System Runner makes them:

* **Explicit** — captured as typed system definitions
* **Stepwise** — broken down into visible, ordered steps
* **Interactive** — can be run step-by-step, manually or programmatically
* **Composable** — systems can be triggered by events, time, conditions, or intuition
* **Evolving** — modify systems over time like any other code artifact

This creates clarity, adaptability, and shared understanding — without heavy process overhead.

## Core Concepts

### 1. System Specification

A system is defined as:

* a **name**
* a set of **typed inputs**
* a list of **steps** (each with titles, descriptions, and optional logic)
* a **finalize** function that produces typed outputs

```ts
const exampleSystem: SystemSpec<Input, Output> = {
  name: "ExampleSystem",
  description: "A simple example system.",

  steps: [
    {
      id: "step-one",
      title: "Step One",
      description: "Do something important.",
    },
    {
      id: "step-two",
      title: "Step Two",
      description: "Do the next thing.",
    },
  ],

  finalize: (ctx) => ({
    summary: "System completed.",
  }),
};
```

Systems are intentionally lightweight, composable, and readable.

---

### 2. Step Runner

System Runner provides a class that executes systems step-by-step:

```ts
const runner = new SystemRunner(exampleSystem, input);

await runner.next(); // runs step one
await runner.next(); // runs step two

const result = runner.finalize(); // returns typed Output
```

This lets you:

* walk a system manually
* integrate systems into tools, bots, or workflows
* drive UI step-by-step
* support interactive learning and onboarding

---

### 3. Triggers (Optional & Composable)

Triggers determine *when* a system runs.

They are separate from the system itself so the same system can run in multiple contexts:

* time-based (cron / schedule)
* event-based
* condition-based
* intuition-based triggers
* UI actions
* CLI commands

Example:

```ts
export const onFeatureReady = (input: ReviewInput) => {
  const runner = new SystemRunner(teamFeatureReview, input);
  // wire to UI, logs, Slack, or automation here
};
```

---

## **Example: Feature Review System**

```ts
export const teamFeatureReview: SystemSpec<
  TeamFeatureReviewInput,
  TeamFeatureReviewOutput
> = {
  name: "TeamFeatureReview",
  description: "Collaborative QA & UX evaluation.",

  steps: [
    {
      id: "schedule",
      title: "Schedule Review",
      description: "Set up a quick working session.",
    },
    {
      id: "align",
      title: "Align on Goal",
      description: "Revisit the feature’s purpose and constraints.",
    },
    {
      id: "test",
      title: "Collaborative Testing",
      description: "Explore, break, observe, note feedback.",
    },
    {
      id: "triage",
      title: "Group Feedback",
      description: "Sort into blocking, polish, and nice-to-haves.",
      run: (ctx) => ({ ...ctx, state: { feedback: [] } }),
    },
  ],

  finalize: (ctx) => ({
    feedback: ctx.state.feedback ?? [],
    summary: "Feature review completed.",
  }),
};
```

## Philosophy

System Runner is built on three ideas:

### Systems as Functions

Clear inputs, clear outputs, explicit transformations.

### Steps as Visible Logic

Each step represents a meaningful unit of clarity.

### Triggers as Signals

A system should run when a signal calls for it — not only on a rigid cadence.

System Runner embraces adaptability without sacrificing structure.
