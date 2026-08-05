import { z } from "zod";
declare const _ExternalId: z.ZodString;
type _ExternalIdSchema = typeof _ExternalId;
export interface ExternalIdSchema extends _ExternalIdSchema {
}
/**An id meaningful to the source channel, treated as an opaque string by the backend (e.g. a Shopify GID like gid://shopify/FulfillmentOrder/123).*/
export declare const ExternalId: ExternalIdSchema;
export type ExternalId = z.infer<typeof ExternalId>;
export {};
//# sourceMappingURL=ExternalId.d.ts.map