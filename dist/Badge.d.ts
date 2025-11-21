import { z } from "zod/v4";
export declare const Badge: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    imageUrl: z.ZodOptional<z.ZodString>;
    priority: z.ZodOptional<z.ZodNumber>;
    title: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Badge = z.infer<typeof Badge>;
//# sourceMappingURL=Badge.d.ts.map