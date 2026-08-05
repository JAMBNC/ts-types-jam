import { z } from "zod";
const _ShoutOutType = z.enum([
    "generic",
    "product",
    "category",
    "group",
    "similar",
]);
export const ShoutOutType = _ShoutOutType;
