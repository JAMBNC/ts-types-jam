import { z } from "zod";
export declare const BadgePosition: z.ZodEnum<{
    topRight: "topRight";
    bottomRight: "bottomRight";
    bottomLeft: "bottomLeft";
    topLeft: "topLeft";
}>;
export type BadgePosition = z.infer<typeof BadgePosition>;
//# sourceMappingURL=BadgePosition.d.ts.map