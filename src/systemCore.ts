export type StepContext<I, O> = {
  input: I;
  state: Record<string, unknown>;
  output?: O;
};

export type Step<I, O> = {
  id: string;
  title: string;
  description: string;
  run?: (ctx: StepContext<I, O>) => Promise<StepContext<I, O>> | StepContext<I, O>;
};

export type SystemSpec<I, O> = {
  name: string;
  description?: string;
  steps: Step<I, O>[];
  finalize: (ctx: StepContext<I, O>) => O;
};
