import { z } from "zod";
import { Money } from "./Money.js";

export const ShippingLine = z
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
    price: z.union([Money, z.null()]).optional(),
  })
  .strict();
export type ShippingLine = z.infer<typeof ShippingLine>;
