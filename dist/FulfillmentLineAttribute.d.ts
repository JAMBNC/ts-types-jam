import { z } from "zod";
declare const _FulfillmentLineAttribute: z.ZodObject<{
    key: z.ZodString;
    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
}, z.core.$strict>;
type _FulfillmentLineAttributeSchema = typeof _FulfillmentLineAttribute;
export interface FulfillmentLineAttributeSchema extends _FulfillmentLineAttributeSchema {
}
/**A custom name/value attribute on a line item (e.g. personalization).*/
export declare const FulfillmentLineAttribute: FulfillmentLineAttributeSchema;
export type FulfillmentLineAttribute = z.infer<typeof FulfillmentLineAttribute>;
export {};
//# sourceMappingURL=FulfillmentLineAttribute.d.ts.map