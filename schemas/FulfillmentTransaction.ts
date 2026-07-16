import { z } from "zod";
import { FulfillmentMoney } from "./FulfillmentMoney.js";

/**A payment transaction on the order.*/
export const FulfillmentTransaction = z
  .object({
    /**e.g. SALE, AUTHORIZATION, CAPTURE, REFUND, VOID.*/
    kind: z
      .union([
        z.string().describe("e.g. SALE, AUTHORIZATION, CAPTURE, REFUND, VOID."),
        z.null().describe("e.g. SALE, AUTHORIZATION, CAPTURE, REFUND, VOID."),
      ])
      .describe("e.g. SALE, AUTHORIZATION, CAPTURE, REFUND, VOID.")
      .optional(),
    gateway: z.union([z.string(), z.null()]).optional(),
    status: z.union([z.string(), z.null()]).optional(),
    amount: z.union([FulfillmentMoney, z.null()]).optional(),
  })
  .strict()
  .describe("A payment transaction on the order.");
export type FulfillmentTransaction = z.infer<typeof FulfillmentTransaction>;
