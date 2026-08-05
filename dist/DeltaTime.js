import { z } from "zod";
const _DeltaTime = z
    .number()
    .describe("Time since the initial load in seconds");
/**Time since the initial load in seconds*/
export const DeltaTime = _DeltaTime;
