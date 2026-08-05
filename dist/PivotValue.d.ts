import { z } from "zod";
declare const _PivotValue: z.ZodObject<{
    helpText: z.ZodOptional<z.ZodString>;
    label: z.ZodString;
    products: z.ZodArray<z.ZodString>;
    swatchType: z.ZodOptional<import("./SwatchType.js").SwatchTypeSchema>;
    swatchValue: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
type _PivotValueSchema = typeof _PivotValue;
export interface PivotValueSchema extends _PivotValueSchema {
}
export declare const PivotValue: PivotValueSchema;
export type PivotValue = z.infer<typeof PivotValue>;
export {};
//# sourceMappingURL=PivotValue.d.ts.map