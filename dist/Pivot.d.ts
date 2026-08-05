import { z } from "zod";
declare const _Pivot: z.ZodObject<{
    attributeRenderPreference: z.ZodOptional<import("./AttributeRenderPreference.js").AttributeRenderPreferenceSchema>;
    code: z.ZodString;
    helpText: z.ZodOptional<z.ZodString>;
    label: z.ZodOptional<z.ZodString>;
    pivotType: z.ZodOptional<import("./PivotType.js").PivotTypeSchema>;
    values: z.ZodArray<import("./PivotValue.js").PivotValueSchema>;
}, z.core.$loose>;
type _PivotSchema = typeof _Pivot;
export interface PivotSchema extends _PivotSchema {
}
export declare const Pivot: PivotSchema;
export type Pivot = z.infer<typeof Pivot>;
export {};
//# sourceMappingURL=Pivot.d.ts.map