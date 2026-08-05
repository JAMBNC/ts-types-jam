import { z } from "zod";
declare const _BadgeImage: z.ZodObject<{
    context: import("./Context.js").ContextSchema;
    position: import("./BadgePosition.js").BadgePositionSchema;
    url: z.ZodString;
}, z.core.$loose>;
type _BadgeImageSchema = typeof _BadgeImage;
export interface BadgeImageSchema extends _BadgeImageSchema {
}
export declare const BadgeImage: BadgeImageSchema;
export type BadgeImage = z.infer<typeof BadgeImage>;
export {};
//# sourceMappingURL=BadgeImage.d.ts.map