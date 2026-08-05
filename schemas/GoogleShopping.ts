import { z } from "zod";

const _GoogleShopping = z
  .object({
    productCategory: z.string().optional(),
    color: z.string().optional(),
    size: z.string().optional(),
    material: z.string().optional(),
    customLabel0: z.string().optional(),
    customLabel1: z.string().optional(),
    customLabel2: z.string().optional(),
    customLabel3: z.string().optional(),
    customLabel4: z.string().optional(),
  })
  .passthrough()
  .describe("Google Shopping / merchant metafields.");
type _GoogleShoppingSchema = typeof _GoogleShopping;
export interface GoogleShoppingSchema extends _GoogleShoppingSchema {}
/**Google Shopping / merchant metafields.*/
export const GoogleShopping: GoogleShoppingSchema = _GoogleShopping;
export type GoogleShopping = z.infer<typeof GoogleShopping>;
