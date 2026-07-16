import { z } from "zod";
/**A discount applied to a single line item.*/
export declare const FulfillmentDiscountAllocation: z.ZodObject<{
    amount: z.ZodObject<{
        amount: z.ZodString;
        currencyCode: z.ZodString;
    }, z.core.$strict>;
    type: z.ZodEnum<{
        automatic: "automatic";
        code: "code";
        manual: "manual";
        script: "script";
        unknown: "unknown";
    }>;
    code: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    title: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
}, z.core.$strict>;
export type FulfillmentDiscountAllocation = z.infer<typeof FulfillmentDiscountAllocation>;
//# sourceMappingURL=FulfillmentDiscountAllocation.d.ts.map