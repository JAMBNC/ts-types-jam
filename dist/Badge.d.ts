import { z } from "zod";
declare const _Badge: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    code: z.ZodString;
    images: z.ZodOptional<z.ZodArray<import("./BadgeImage.js").BadgeImageSchema>>;
    priority: z.ZodOptional<z.ZodNumber>;
}, z.core.$loose>;
type _BadgeSchema = typeof _Badge;
export interface BadgeSchema extends _BadgeSchema {
}
export declare const Badge: BadgeSchema;
export type Badge = z.infer<typeof Badge>;
export {};
//# sourceMappingURL=Badge.d.ts.map