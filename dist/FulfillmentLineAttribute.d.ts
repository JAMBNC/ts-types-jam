import { z } from "zod";
/**A custom name/value attribute on a line item (e.g. personalization).*/
export declare const FulfillmentLineAttribute: z.ZodObject<{
    key: z.ZodString;
    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
}, z.core.$strict>;
export type FulfillmentLineAttribute = z.infer<typeof FulfillmentLineAttribute>;
//# sourceMappingURL=FulfillmentLineAttribute.d.ts.map