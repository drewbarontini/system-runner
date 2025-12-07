# Example Systems

This directory contains simple, self-contained examples of systems expressed
using the System Runner pattern.

Each system file:

- defines its own `Input` and `Output` types
- exports a system function that returns:
  - the `inputs` received
  - an array of numbered `process` notes
  - an `output` object
- exports `triggers` describing when/why the system runs

Files are fully independent for clarity.
