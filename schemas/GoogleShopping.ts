import { z } from "zod";

/**Google Shopping / merchant metafields.*/
export const GoogleShopping = z
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
export type GoogleShopping = z.infer<typeof GoogleShopping>;
