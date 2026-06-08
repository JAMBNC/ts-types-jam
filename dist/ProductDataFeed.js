import { z } from "zod";
import { CategoryReference } from "./CategoryReference.js";
import { GoogleShopping } from "./GoogleShopping.js";
import { Media } from "./Media.js";
import { ProductContent } from "./ProductContent.js";
import { ProductCustomization } from "./ProductCustomization.js";
import { ShoutOut } from "./ShoutOut.js";
import { Taxonomy } from "./Taxonomy.js";
export const ProductDataFeed = z
    .object({
    /**Product SKU. Identity for the feed object and S3 key.*/
    sku: z
        .string()
        .describe("Product SKU. Identity for the feed object and S3 key."),
    /**When NetSuite produced this snapshot.*/
    generatedAt: z
        .string()
        .datetime({ offset: true })
        .describe("When NetSuite produced this snapshot.")
        .optional(),
    /**NetSuite internal item id, for traceability.*/
    internalSku: z
        .string()
        .describe("NetSuite internal item id, for traceability.")
        .optional(),
    /**Product title.*/
    name: z.string().describe("Product title."),
    /**Brand / vendor (e.g. JAM, BNC).*/
    brand: z.string().describe("Brand / vendor (e.g. JAM, BNC).").optional(),
    /**Product type (e.g. "Envelopes - Paper").*/
    type: z
        .string()
        .describe('Product type (e.g. "Envelopes - Paper").')
        .optional(),
    /**Web/publish status sourced from the brand web-status records.*/
    status: z
        .string()
        .describe("Web/publish status sourced from the brand web-status records.")
        .optional(),
    browsable: z.boolean().optional(),
    searchable: z.boolean().optional(),
    content: ProductContent.optional(),
    customization: ProductCustomization.optional(),
    /**Maps to PurchaseOptions.customizable.*/
    customizable: z
        .boolean()
        .describe("Maps to PurchaseOptions.customizable.")
        .optional(),
    /**Maps to PurchaseOptions.designRequired.*/
    designRequired: z
        .boolean()
        .describe("Maps to PurchaseOptions.designRequired.")
        .optional(),
    /**Maps to PurchaseOptions.allowsSample.*/
    allowsSample: z
        .boolean()
        .describe("Maps to PurchaseOptions.allowsSample.")
        .optional(),
    /**Maps to PurchaseOptions.toBeDiscontinued.*/
    toBeDiscontinued: z
        .boolean()
        .describe("Maps to PurchaseOptions.toBeDiscontinued.")
        .optional(),
    taxonomy: Taxonomy.optional(),
    primaryCategory: CategoryReference.optional(),
    /**Flat map of product spec attributes (the jam.spec_* set). Mirrors Product.specs.*/
    specs: z
        .record(z.string(), z.string())
        .describe("Flat map of product spec attributes (the jam.spec_* set). Mirrors Product.specs.")
        .optional(),
    upc: z.string().optional(),
    /**Variant weight.*/
    weight: z.number().describe("Variant weight.").optional(),
    /**Weight unit, e.g. "lb".*/
    weightUnit: z.string().describe('Weight unit, e.g. "lb".').optional(),
    /**Display group id this SKU belongs to.*/
    displayGroup: z
        .string()
        .describe("Display group id this SKU belongs to.")
        .optional(),
    /**Product images / media.*/
    media: z.array(Media).describe("Product images / media.").optional(),
    relatedSkus: z.array(z.string()).optional(),
    crossSellSkus: z.array(z.string()).optional(),
    upsellSkus: z.array(z.string()).optional(),
    /**This SKU's pivot values within its display group (e.g. cleanColor, envelopeClosure).*/
    groupPivotValues: z
        .record(z.string(), z.string())
        .describe("This SKU's pivot values within its display group (e.g. cleanColor, envelopeClosure).")
        .optional(),
    /**Group-level shout-outs / cross-navigation. Reuses ShoutOut from DisplayGroup.json.*/
    groupShoutOuts: z
        .array(ShoutOut)
        .describe("Group-level shout-outs / cross-navigation. Reuses ShoutOut from DisplayGroup.json.")
        .optional(),
    /**Google Shopping / merchant metafields.*/
    googleShopping: GoogleShopping.optional(),
})
    .passthrough();
