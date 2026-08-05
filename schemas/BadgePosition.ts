import { z } from "zod";

const _BadgePosition = z.enum([
  "topRight",
  "bottomRight",
  "bottomLeft",
  "topLeft",
]);
type _BadgePositionSchema = typeof _BadgePosition;
export interface BadgePositionSchema extends _BadgePositionSchema {}
export const BadgePosition: BadgePositionSchema = _BadgePosition;
export type BadgePosition = z.infer<typeof BadgePosition>;
