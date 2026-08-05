import { z } from "zod";

const _FulfillmentLineAttribute = z
  .object({
    key: z.string(),
    value: z.union([z.string(), z.null()]).optional(),
  })
  .strict()
  .describe(
    "A custom name/value attribute on a line item (e.g. personalization).",
  );
type _FulfillmentLineAttributeSchema = typeof _FulfillmentLineAttribute;
export interface FulfillmentLineAttributeSchema extends _FulfillmentLineAttributeSchema {}
/**A custom name/value attribute on a line item (e.g. personalization).*/
export const FulfillmentLineAttribute: FulfillmentLineAttributeSchema =
  _FulfillmentLineAttribute;
export type FulfillmentLineAttribute = z.infer<typeof FulfillmentLineAttribute>;
