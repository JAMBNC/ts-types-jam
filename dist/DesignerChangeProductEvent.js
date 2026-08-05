import { z } from "zod";
const _DesignerChangeProductEvent = z
    .object({
    type: z.literal("changeProduct"),
    payload: z.object({ sku: z.string() }).strict(),
})
    .strict()
    .describe("Event emitted when the designer requests a product change");
/**Event emitted when the designer requests a product change*/
export const DesignerChangeProductEvent = _DesignerChangeProductEvent;
