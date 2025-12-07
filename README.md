# System Runner
*A tiny pattern for documenting real-world processes as simple TypeScript functions.*

System Runner is an experiment in expressing everyday systems—reviews, rituals, syncs, workflows—as **plain functions** with three parts:

- **Inputs** → what the system needs  
- **Process** → numbered notes describing how it runs  
- **Output** → what the system produces  

You can also attach **Triggers** to describe *when* or *why* a system should run.

The goal is clarity, not execution. These are lightweight, readable specifications of how your work works.

## System Shape

A system is just a function that returns:

```ts
{
  inputs: InputType;
  process: string[];   // numbered process notes
  output: OutputType;
}
````

Nothing more.

This keeps the structure familiar (inputs → transformation → outputs) while remaining extremely simple.

## System Function Definition

Every system is defined as a plain function.
It receives typed inputs and returns an object containing:

- the original inputs  
- numbered process notes  
- the output the system produces  

In TypeScript, a system looks like this:

```ts
export function systemName(
  input: InputType
): {
  inputs: InputType;
  process: string[];
  output: OutputType;
} {
  return {
    inputs: input,
    process: [
      'Step 1...',
      'Step 2...',
      'Step 3...'
    ],
    output: {
      // whatever the system produces
    }
  };
}

## Trigger Shape

Triggers describe **when** a system should run.

```ts
type Trigger =
  | { type: 'time'; description: string; schedule: string }
  | { type: 'event'; description: string; event: string }
  | { type: 'condition'; description: string; condition: string }
  | { type: 'manual'; description: string };
```

Triggers live alongside the system, not inside it.

## Example: Weekly Sync System

```ts
// types.ts
export interface ProjectUpdate {
  title: string;
  description: string;
  status: 'on track' | 'off track' | 'at risk';
}

export interface WeeklySyncInput {
  weekOf: string;
  metrics: string[];
  released: string[];
  projectUpdates: ProjectUpdate[];
}

export interface WeeklySyncOutput {
  videoLink: string;
}
```

```ts
// weeklySync.ts

import { WeeklySyncInput, WeeklySyncOutput } from './types';

export function weeklySync(
  input: WeeklySyncInput
): {
  inputs: WeeklySyncInput;
  process: string[];
  output: WeeklySyncOutput;
} {
  return {
    inputs: input,

    process: [
      'Review metrics and surfaced signals from the past week.',
      'Review last week\'s releases and note any follow-ups needed.',
      'Review project updates and assess status (on track / off track / at risk).',
      'Update internal systems and artifacts to reflect the latest information.',
      'Record and publish a weekly Loom video summarizing highlights, risks, and next steps.'
    ],

    output: {
      videoLink: 'A_LINK_TO_YOUR_VIDEO_UPDATE'
    }
  };
}
```

### Triggers

```ts
export const weeklySyncTriggers = [
  {
    type: 'time',
    description: 'Run the weekly sync at the beginning of each week.',
    schedule: 'Every Monday at 10:00 AM ET',
  },
];
```

## Why This Exists

Because most systems are over-explained.

By expressing a system as:

* **Inputs you gather**
* **Numbered notes describing the flow**
* **The output you produce**
* **Triggers that define when it runs**

...you get:

* A repeatable process
* A clear mental model
* A structure you can refine
* A pattern you can teach or document
* A foundation for future tooling (CLI, UI, automations, etc.)

Without any heavy scaffolding.
