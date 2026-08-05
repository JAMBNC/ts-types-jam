import { z } from "zod";
import { Pivot } from "./Pivot.js";
import { ProductListing } from "./ProductListing.js";
import { ShoutOut } from "./ShoutOut.js";

const _DisplayGroup = z
  .object({
    id: z.string(),
    identifiers: z.record(z.string(), z.any()).optional(),
    pivots: z.array(Pivot),
    products: z.array(ProductListing),
    shoutOuts: z.array(ShoutOut).optional(),
  })
  .passthrough();
type _DisplayGroupSchema = typeof _DisplayGroup;
export interface DisplayGroupSchema extends _DisplayGroupSchema {}
export const DisplayGroup: DisplayGroupSchema = _DisplayGroup;
export type DisplayGroup = z.infer<typeof DisplayGroup>;
