import { z } from "zod";
export declare const ProductPivot: z.ZodObject<{
    helpText: z.ZodOptional<z.ZodString>;
    label: z.ZodString;
    values: z.ZodRecord<z.ZodAny, z.core.SomeType>;
}, z.core.$strip>;
export type ProductPivot = z.infer<typeof ProductPivot>;
//# sourceMappingURL=ProductPivot.d.ts.map