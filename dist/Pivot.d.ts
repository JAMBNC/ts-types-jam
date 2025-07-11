import { z } from "zod";
export declare const Pivot: z.ZodObject<{
    helpText: z.ZodOptional<z.ZodString>;
    label: z.ZodString;
    values: z.ZodArray<z.ZodAny>;
}, z.core.$strip>;
export type Pivot = z.infer<typeof Pivot>;
//# sourceMappingURL=Pivot.d.ts.map