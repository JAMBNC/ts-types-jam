import { z } from "zod";
const _BadgePosition = z.enum([
    "topRight",
    "bottomRight",
    "bottomLeft",
    "topLeft",
]);
export const BadgePosition = _BadgePosition;
