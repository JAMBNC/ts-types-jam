import { z } from "zod";

/**Event emitted when the designer requests a product change*/
export const DesignerChangeProductEvent = z
  .object({
    type: z.literal("changeProduct"),
    payload: z.object({ sku: z.string() }).strict(),
  })
  .strict()
  .describe("Event emitted when the designer requests a product change");
export type DesignerChangeProductEvent = z.infer<
  typeof DesignerChangeProductEvent
>;
