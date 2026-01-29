import { z } from "zod";
export declare const ReviewSummary: z.ZodObject<{
    displayGroupId: z.ZodOptional<z.ZodNumber>;
    maxRating: z.ZodOptional<z.ZodNumber>;
    rating: z.ZodOptional<z.ZodNumber>;
    reviewCount: z.ZodOptional<z.ZodNumber>;
    sku: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ReviewSummary = z.infer<typeof ReviewSummary>;
//# sourceMappingURL=ReviewSummary.d.ts.map