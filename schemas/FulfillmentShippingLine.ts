import { z } from "zod";
import { FulfillmentMoney } from "./FulfillmentMoney.js";

const _FulfillmentShippingLine = z
  .object({
    title: z.union([z.string(), z.null()]).optional(),
    code: z.union([z.string(), z.null()]).optional(),
    /**Carrier identifier, when provided.*/
    carrier: z
      .union([
        z.string().describe("Carrier identifier, when provided."),
        z.null().describe("Carrier identifier, when provided."),
      ])
      .describe("Carrier identifier, when provided.")
      .optional(),
    price: z.union([FulfillmentMoney, z.null()]).optional(),
  })
  .strict();
type _FulfillmentShippingLineSchema = typeof _FulfillmentShippingLine;
export interface FulfillmentShippingLineSchema extends _FulfillmentShippingLineSchema {}
export const FulfillmentShippingLine: FulfillmentShippingLineSchema =
  _FulfillmentShippingLine;
export type FulfillmentShippingLine = z.infer<typeof FulfillmentShippingLine>;
