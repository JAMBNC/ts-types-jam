import { z } from "zod";
export const CoverageAdderCodeEnum = z
    .object({ type: z.literal("coverageAdderCodeEnum") })
    .passthrough();
