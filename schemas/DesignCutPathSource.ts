import { z } from "zod";

const _DesignCutPathSource = z
  .enum(["stitched", "bbox"])
  .describe(
    "How the cut path was found: traced as a closed outline from the knife strokes, or the strokes' bounding box when no outline would close.",
  );
type _DesignCutPathSourceSchema = typeof _DesignCutPathSource;
export interface DesignCutPathSourceSchema extends _DesignCutPathSourceSchema {}
/**How the cut path was found: traced as a closed outline from the knife strokes, or the strokes' bounding box when no outline would close.*/
export const DesignCutPathSource: DesignCutPathSourceSchema =
  _DesignCutPathSource;
export type DesignCutPathSource = z.infer<typeof DesignCutPathSource>;
