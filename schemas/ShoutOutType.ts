import { z } from "zod";

export const ShoutOutType = z.enum([
  "generic",
  "product",
  "category",
  "group",
  "similar",
]);
export type ShoutOutType = z.infer<typeof ShoutOutType>;
