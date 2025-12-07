export interface ProjectUpdate {
  title: string;
  description: string;
  status: 'on track' | 'off track' | 'at risk';
}

export interface WeeklyReviewInput {
  updates: ProjectUpdate[];
};

export interface Artifact {
  id: string;
  title: string;
  link: string;
}

export interface WeeklyReviewOutput {
  artifacts: Artifact[];
};

export function weeklyReview(
  input: WeeklyReviewInput
): {
  inputs: WeeklyReviewInput;
  process: string[];
  output: WeeklyReviewOutput;
} {
  return {
    inputs: input,

    process: [
      'Each team member shares their updates and shows progress',
      'Systems are updated to reflect the latest project status',
      'Videos and screenshots are tracked as progress artifacts',
    ],

    output: {
      artifacts: string[],
    }
  };
}
