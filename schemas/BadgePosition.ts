import { z } from "zod";

export const BadgePosition = z.enum([
  "topRight",
  "bottomRight",
  "bottomLeft",
  "topLeft",
]);
export type BadgePosition = z.infer<typeof BadgePosition>;
