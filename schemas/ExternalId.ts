import { z } from "zod";

const _ExternalId = z
  .string()
  .min(1)
  .describe(
    "An id meaningful to the source channel, treated as an opaque string by the backend (e.g. a Shopify GID like gid://shopify/FulfillmentOrder/123).",
  );
type _ExternalIdSchema = typeof _ExternalId;
export interface ExternalIdSchema extends _ExternalIdSchema {}
/**An id meaningful to the source channel, treated as an opaque string by the backend (e.g. a Shopify GID like gid://shopify/FulfillmentOrder/123).*/
export const ExternalId: ExternalIdSchema = _ExternalId;
export type ExternalId = z.infer<typeof ExternalId>;
