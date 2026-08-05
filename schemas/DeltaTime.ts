import { z } from "zod";

const _DeltaTime = z
  .number()
  .describe("Time since the initial load in seconds");
type _DeltaTimeSchema = typeof _DeltaTime;
export interface DeltaTimeSchema extends _DeltaTimeSchema {}
/**Time since the initial load in seconds*/
export const DeltaTime: DeltaTimeSchema = _DeltaTime;
export type DeltaTime = z.infer<typeof DeltaTime>;
