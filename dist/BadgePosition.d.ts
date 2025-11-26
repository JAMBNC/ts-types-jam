import { z } from "zod/v4";
export declare const BadgePosition: z.ZodEnum<{
    topRight: "topRight";
    bottomRight: "bottomRight";
    bottomLeft: "bottomLeft";
    topLeft: "topLeft";
}>;
export type BadgePosition = z.infer<typeof BadgePosition>;
//# sourceMappingURL=BadgePosition.d.ts.map