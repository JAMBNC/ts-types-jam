import { z } from "zod";
import { LocationStock } from "./LocationStock.js";
import { NonNegativeIntRange } from "./NonNegativeIntRange.js";
export const InventoryDataFeed = z
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
    /**True when total available quantity is greater than zero.*/
    inStock: z
        .boolean()
        .describe("True when total available quantity is greater than zero."),
    /**Rolled-up available quantity across all fulfillment locations.*/
    stockQty: z
        .number()
        .int()
        .gte(0)
        .describe("Rolled-up available quantity across all fulfillment locations."),
    /**Per-location availability. Present when inventory is tracked by location; omit for a single rolled-up quantity.*/
    locations: z
        .array(LocationStock)
        .describe("Per-location availability. Present when inventory is tracked by location; omit for a single rolled-up quantity.")
        .optional(),
    plainLeadTimeDayRange: NonNegativeIntRange.optional(),
    customLeadTimeDayRange: NonNegativeIntRange.optional(),
    /**Human-readable lead time derived from availability, e.g. "Ships in 1 to 3 Days".*/
    leadTimeLabel: z
        .string()
        .describe('Human-readable lead time derived from availability, e.g. "Ships in 1 to 3 Days".')
        .optional(),
})
    .passthrough();
