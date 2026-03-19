import { z } from "zod";
import { FoilCoverageAdderCode } from "./FoilCoverageAdderCode.js";
import { InkCoverageAdderCode } from "./InkCoverageAdderCode.js";

export const CoverageAdderCodeEnum = z
  .object({ type: z.literal("coverageAdderCodeEnum") })
  .passthrough()
  .and(z.union([FoilCoverageAdderCode, InkCoverageAdderCode]));
export type CoverageAdderCodeEnum = z.infer<typeof CoverageAdderCodeEnum>;
