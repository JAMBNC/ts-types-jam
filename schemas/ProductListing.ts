import { z } from "zod";

const _ProductListing = z
  .object({
    isCustomizable: z.boolean(),
    mainImageUrl: z.string().optional(),
    pivotValues: z.record(z.string(), z.any()).optional(),
    shortName: z.string().optional(),
    sku: z.string(),
  })
  .passthrough();
type _ProductListingSchema = typeof _ProductListing;
export interface ProductListingSchema extends _ProductListingSchema {}
export const ProductListing: ProductListingSchema = _ProductListing;
export type ProductListing = z.infer<typeof ProductListing>;
