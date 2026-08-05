import { z } from "zod";
import { FoilCoverageAdderCode } from "./FoilCoverageAdderCode.js";
import { InkCoverageAdderCode } from "./InkCoverageAdderCode.js";
const _CoverageAdderCodeEnum = z
    .object({ type: z.literal("coverageAdderCodeEnum") })
    .passthrough()
    .and(z.union([FoilCoverageAdderCode, InkCoverageAdderCode]));
export const CoverageAdderCodeEnum = _CoverageAdderCodeEnum;
