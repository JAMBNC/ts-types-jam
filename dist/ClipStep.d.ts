import { z } from "zod";
declare const _ClipStep: z.ZodObject<{
    paths: z.ZodArray<import("./Path.js").PathSchema>;
    rule: z.ZodOptional<z.ZodEnum<{
        evenodd: "evenodd";
        nonzero: "nonzero";
    }>>;
}, z.core.$strict>;
type _ClipStepSchema = typeof _ClipStep;
export interface ClipStepSchema extends _ClipStepSchema {
}
/**One clip operation: the contours combined by the winding rule, then intersected with the running clip (PDF W/W*). An ordered array of these on an ingredient narrows where it draws. Multiple contours with evenodd expresses a region with holes, e.g. a panel minus a die-cut window.*/
export declare const ClipStep: ClipStepSchema;
export type ClipStep = z.infer<typeof ClipStep>;
export {};
//# sourceMappingURL=ClipStep.d.ts.map