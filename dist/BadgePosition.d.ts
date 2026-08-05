import { z } from "zod";
declare const _BadgePosition: z.ZodEnum<{
    bottomLeft: "bottomLeft";
    bottomRight: "bottomRight";
    topLeft: "topLeft";
    topRight: "topRight";
}>;
type _BadgePositionSchema = typeof _BadgePosition;
export interface BadgePositionSchema extends _BadgePositionSchema {
}
export declare const BadgePosition: BadgePositionSchema;
export type BadgePosition = z.infer<typeof BadgePosition>;
export {};
//# sourceMappingURL=BadgePosition.d.ts.map