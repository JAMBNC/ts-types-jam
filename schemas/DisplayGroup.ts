import { z } from "zod";
import { Pivot } from "./Pivot.js";
import { ProductListing } from "./ProductListing.js";
import { ShoutOut } from "./ShoutOut.js";

export const DisplayGroup = z
  .object({
    id: z.string(),
    identifiers: z.record(z.string(), z.any()).optional(),
    pivots: z.array(Pivot),
    products: z.array(ProductListing),
    shoutOuts: z.array(ShoutOut).optional(),
  })
  .passthrough();
export type DisplayGroup = z.infer<typeof DisplayGroup>;
