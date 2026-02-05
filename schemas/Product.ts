import { z } from "zod";
import { CategoryReference } from "./CategoryReference.js";
import { Media } from "./Media.js";
import { ProductContent } from "./ProductContent.js";
import { ProductCustomization } from "./ProductCustomization.js";
import { ProductUrl } from "./ProductUrl.js";
import { PurchaseOptions } from "./PurchaseOptions.js";
import { Taxonomy } from "./Taxonomy.js";

export const Product = z
  .object({
    badges: z.array(z.string()).optional(),
    brand: z.string().optional(),
    browsable: z.boolean(),
    content: ProductContent.optional(),
    createdAt: z.string().datetime({ offset: true }).optional(),
    customization: ProductCustomization.optional(),
    displayGroup: z.string().optional(),
    identifiers: z.record(z.any()).optional(),
    media: z.array(Media).optional(),
    name: z.string(),
    primaryCategory: CategoryReference.optional(),
    purchaseOptions: PurchaseOptions.optional(),
    searchable: z.boolean(),
    sku: z.string(),
    specs: z.record(z.string()),
    status: z.string().optional(),
    taxonomy: Taxonomy,
    upc: z.string().optional(),
    updatedAt: z.string().datetime({ offset: true }).optional(),
    url: z.array(ProductUrl).min(1),
  })
  .passthrough();
export type Product = z.infer<typeof Product>;
