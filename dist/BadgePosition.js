import { z } from "zod/v4";
export const BadgePosition = z.enum([
    "topRight",
    "bottomRight",
    "bottomLeft",
    "topLeft",
]);
