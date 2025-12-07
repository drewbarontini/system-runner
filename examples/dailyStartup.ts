export interface DailyStartupInput {
  notifications: string[];
  schedule: string[];
  tasks: string[];
};

export interface DailyStartupOutput {
  outcomes: string[];
};

export function dailyStartup(
  input: DailyStartupInput
): {
  inputs: DailyStartupInput;
  process: string[];
  output: DailyStartupOutput;
} {
  return {
    inputs: input,
    
    process: [
      'Review all notifications and close open loops',
      'Review schedule for the day and block off time',
      'Determine core focus and get started on it'
    ],
    
    output: {
      outcomes: [
        '1. The first outcome I want today',
        '2. The second outcome I want today',
        '3. The third outcome I want today',
      ],
    }
  };
}

export const dailyStartupTriggers = [
  {
    type: 'time',
    description: 'Run the daily startup routine at the beginning of each day',
    schedule: 'Every weekday at 9:00 AM ET',
  },
];
