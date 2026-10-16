import { z } from "zod";
import { Path } from "./Path.js";
const _ClipStep = z
    .object({
    /**Contours for this step.*/
    paths: z.array(Path).describe("Contours for this step."),
    /**Winding rule for combining this step's contours. Defaults to nonzero.*/
    rule: z
        .enum(["nonzero", "evenodd"])
        .describe("Winding rule for combining this step's contours. Defaults to nonzero.")
        .optional(),
})
    .strict()
    .describe("One clip operation: the contours combined by the winding rule, then intersected with the running clip (PDF W/W*). An ordered array of these on an ingredient narrows where it draws. Multiple contours with evenodd expresses a region with holes, e.g. a panel minus a die-cut window.");
/**One clip operation: the contours combined by the winding rule, then intersected with the running clip (PDF W/W*). An ordered array of these on an ingredient narrows where it draws. Multiple contours with evenodd expresses a region with holes, e.g. a panel minus a die-cut window.*/
export const ClipStep = _ClipStep;
