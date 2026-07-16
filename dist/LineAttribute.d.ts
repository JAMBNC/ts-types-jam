import { z } from "zod";
/**A custom name/value attribute on a line item (e.g. personalization).*/
export declare const LineAttribute: z.ZodObject<{
    key: z.ZodString;
    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
}, z.core.$strict>;
export type LineAttribute = z.infer<typeof LineAttribute>;
//# sourceMappingURL=LineAttribute.d.ts.map