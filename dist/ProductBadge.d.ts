import { z } from "zod";
export declare const ProductBadge: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    imageUrl: z.ZodOptional<z.ZodString>;
    label: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ProductBadge = z.infer<typeof ProductBadge>;
//# sourceMappingURL=ProductBadge.d.ts.map