import { z } from "zod";
import { ExternalId } from "./ExternalId.js";

const _FulfillmentCustomer = z
  .object({
    /**An id meaningful to the source channel, treated as an opaque string by the backend (e.g. a Shopify GID like gid://shopify/FulfillmentOrder/123).*/
    id: ExternalId,
    firstName: z.union([z.string(), z.null()]).optional(),
    lastName: z.union([z.string(), z.null()]).optional(),
    email: z.union([z.string(), z.null()]).optional(),
    phone: z.union([z.string(), z.null()]).optional(),
  })
  .strict();
type _FulfillmentCustomerSchema = typeof _FulfillmentCustomer;
export interface FulfillmentCustomerSchema extends _FulfillmentCustomerSchema {}
export const FulfillmentCustomer: FulfillmentCustomerSchema =
  _FulfillmentCustomer;
export type FulfillmentCustomer = z.infer<typeof FulfillmentCustomer>;
