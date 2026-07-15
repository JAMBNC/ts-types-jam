import { z } from "zod";
/**An id meaningful to the source channel, treated as an opaque string by the backend (e.g. a Shopify GID like gid://shopify/FulfillmentOrder/123).*/
export declare const ExternalId: z.ZodString;
export type ExternalId = z.infer<typeof ExternalId>;
//# sourceMappingURL=ExternalId.d.ts.map