import { z } from "zod";
declare const _FulfillmentOrderDestination: z.ZodObject<{
    firstName: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    lastName: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    company: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    address1: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    address2: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    city: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    province: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    zip: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    countryCode: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    phone: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    email: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
}, z.core.$loose>;
type _FulfillmentOrderDestinationSchema = typeof _FulfillmentOrderDestination;
export interface FulfillmentOrderDestinationSchema extends _FulfillmentOrderDestinationSchema {
}
/**The ship-to address on a fulfillment order. Extra fields are allowed to tolerate channel-specific additions.*/
export declare const FulfillmentOrderDestination: FulfillmentOrderDestinationSchema;
export type FulfillmentOrderDestination = z.infer<typeof FulfillmentOrderDestination>;
export {};
//# sourceMappingURL=FulfillmentOrderDestination.d.ts.map