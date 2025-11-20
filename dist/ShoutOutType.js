import { z } from "zod/v4";
export const ShoutOutType = z.enum([
    "generic",
    "product",
    "category",
    "group",
    "similar",
]);
