import { z } from "zod/v4";

export const ProductUrlType = z.enum([
  "product",
  "customProduct",
  "yourLogoHere",
]);
export type ProductUrlType = z.infer<typeof ProductUrlType>;
