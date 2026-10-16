import { z } from "zod";
const _DesignCutPathSource = z
    .enum(["stitched", "bbox"])
    .describe("How the cut path was found: traced as a closed outline from the knife strokes, or the strokes' bounding box when no outline would close.");
/**How the cut path was found: traced as a closed outline from the knife strokes, or the strokes' bounding box when no outline would close.*/
export const DesignCutPathSource = _DesignCutPathSource;
