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

export const weeklySyncTriggers = [
  {
    type: 'time',
    description: 'Run the weekly sync at the beginning of each week.',
    schedule: 'Every Monday at 10:00 AM ET',
  },
];
