import { z } from "zod";
/**Time since the initial load in seconds*/
export const DeltaTime = z
    .number()
    .describe("Time since the initial load in seconds");
