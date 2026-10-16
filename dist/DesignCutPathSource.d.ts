import { z } from "zod";
declare const _DesignCutPathSource: z.ZodEnum<{
    bbox: "bbox";
    stitched: "stitched";
}>;
type _DesignCutPathSourceSchema = typeof _DesignCutPathSource;
export interface DesignCutPathSourceSchema extends _DesignCutPathSourceSchema {
}
/**How the cut path was found: traced as a closed outline from the knife strokes, or the strokes' bounding box when no outline would close.*/
export declare const DesignCutPathSource: DesignCutPathSourceSchema;
export type DesignCutPathSource = z.infer<typeof DesignCutPathSource>;
export {};
//# sourceMappingURL=DesignCutPathSource.d.ts.map