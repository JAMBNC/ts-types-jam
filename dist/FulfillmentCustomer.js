import { z } from "zod";
import { ExternalId } from "./ExternalId.js";
export const FulfillmentCustomer = z
    .object({
    /**An id meaningful to the source channel, treated as an opaque string by the backend (e.g. a Shopify GID like gid://shopify/FulfillmentOrder/123).*/
    id: ExternalId,
    firstName: z.union([z.string(), z.null()]).optional(),
    lastName: z.union([z.string(), z.null()]).optional(),
    email: z.union([z.string(), z.null()]).optional(),
    phone: z.union([z.string(), z.null()]).optional(),
})
    .strict();
