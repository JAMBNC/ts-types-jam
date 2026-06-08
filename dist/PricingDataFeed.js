import { z } from "zod";
import { QuantityStepIncrement } from "./QuantityStepIncrement.js";
import { TierPrice } from "./TierPrice.js";
export const PricingDataFeed = z
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
    /**List/base price (the Base price level).*/
    basePrice: z
        .number()
        .describe("List/base price (the Base price level).")
        .optional(),
    /**Lowest effective price across tiers. Maps to PurchaseOptions.minPrice.*/
    minPrice: z
        .number()
        .describe("Lowest effective price across tiers. Maps to PurchaseOptions.minPrice."),
    /**Highest effective price across tiers. Maps to PurchaseOptions.maxPrice.*/
    maxPrice: z
        .number()
        .describe("Highest effective price across tiers. Maps to PurchaseOptions.maxPrice."),
    /**Strike-through / original price when on sale.*/
    compareAtPrice: z
        .number()
        .describe("Strike-through / original price when on sale.")
        .optional(),
    onSale: z.boolean().optional(),
    pricePercentOff: z.number().optional(),
    /**Quantity break pricing. Maps to PurchaseOptions.tierPrices.*/
    tierPrices: z
        .array(TierPrice)
        .describe("Quantity break pricing. Maps to PurchaseOptions.tierPrices."),
    /**Minimum order quantity. Maps to PurchaseOptions.minSaleQty.*/
    minSaleQty: z
        .number()
        .int()
        .gt(0)
        .describe("Minimum order quantity. Maps to PurchaseOptions.minSaleQty.")
        .optional(),
    /**Minimum quantity for a customized order. Maps to PurchaseOptions.minCustomizationQty.*/
    minCustomizationQty: z
        .number()
        .int()
        .gt(0)
        .describe("Minimum quantity for a customized order. Maps to PurchaseOptions.minCustomizationQty.")
        .optional(),
    /**Allowed order-quantity step increments. Maps to PurchaseOptions.quantityStepIncrements.*/
    quantityStepIncrements: z
        .array(QuantityStepIncrement)
        .describe("Allowed order-quantity step increments. Maps to PurchaseOptions.quantityStepIncrements.")
        .optional(),
    /**Suggested order quantities to surface in the UI. Maps to PurchaseOptions.suggestedQuantityDisplays.*/
    suggestedQuantityDisplays: z
        .array(z.number().int())
        .describe("Suggested order quantities to surface in the UI. Maps to PurchaseOptions.suggestedQuantityDisplays.")
        .optional(),
})
    .passthrough();
