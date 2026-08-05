import { z } from "zod";
const _ExternalId = z
    .string()
    .min(1)
    .describe("An id meaningful to the source channel, treated as an opaque string by the backend (e.g. a Shopify GID like gid://shopify/FulfillmentOrder/123).");
/**An id meaningful to the source channel, treated as an opaque string by the backend (e.g. a Shopify GID like gid://shopify/FulfillmentOrder/123).*/
export const ExternalId = _ExternalId;
