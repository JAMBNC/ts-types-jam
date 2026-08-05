import { z } from "zod";
const _FulfillmentLineAttribute = z
    .object({
    key: z.string(),
    value: z.union([z.string(), z.null()]).optional(),
})
    .strict()
    .describe("A custom name/value attribute on a line item (e.g. personalization).");
/**A custom name/value attribute on a line item (e.g. personalization).*/
export const FulfillmentLineAttribute = _FulfillmentLineAttribute;
