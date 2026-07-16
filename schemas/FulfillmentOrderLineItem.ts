import { z } from "zod";
import { DiscountAllocation } from "./DiscountAllocation.js";
import { ExternalId } from "./ExternalId.js";
import { LineAttribute } from "./LineAttribute.js";
import { Money } from "./Money.js";
import { TaxLine } from "./TaxLine.js";

/**A single line item on a hydrated fulfillment order.*/
export const FulfillmentOrderLineItem = z
  .object({
    /**An id meaningful to the source channel, treated as an opaque string by the backend (e.g. a Shopify GID like gid://shopify/FulfillmentOrder/123).*/
    id: ExternalId,
    /**The id of the underlying order line item in the source channel, when distinct from id.*/
    orderLineItemId: z
      .union([ExternalId, z.null()])
      .describe(
        "The id of the underlying order line item in the source channel, when distinct from id.",
      ),
    /**Channel SKU as configured on the store.*/
    sku: z
      .union([
        z.string().describe("Channel SKU as configured on the store."),
        z.null().describe("Channel SKU as configured on the store."),
      ])
      .describe("Channel SKU as configured on the store."),
    quantity: z.number().int().gte(0),
    remainingQuantity: z.union([z.number().int().gte(0), z.null()]).optional(),
    title: z.union([z.string(), z.null()]).optional(),
    variantTitle: z.union([z.string(), z.null()]).optional(),
    /**Original per-unit price before line discounts.*/
    unitPrice: z
      .union([Money, z.null()])
      .describe("Original per-unit price before line discounts.")
      .optional(),
    /**Per-unit price after line discounts.*/
    discountedUnitPrice: z
      .union([Money, z.null()])
      .describe("Per-unit price after line discounts.")
      .optional(),
    discountAllocations: z.array(DiscountAllocation).optional(),
    attributes: z.array(LineAttribute).optional(),
    taxLines: z.array(TaxLine).optional(),
  })
  .strict()
  .describe("A single line item on a hydrated fulfillment order.");
export type FulfillmentOrderLineItem = z.infer<typeof FulfillmentOrderLineItem>;
