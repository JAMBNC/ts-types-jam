import { z } from "zod";

const _DesignerAddressEndpoints = z
  .object({
    /**The endpoint URL for fetching the user's address books list.  (uses the DesignerAuth.endpointAuth)*/
    addressBooks: z
      .string()
      .url()
      .describe(
        "The endpoint URL for fetching the user's address books list.  (uses the DesignerAuth.endpointAuth)",
      ),
    /**The endpoint URL for fetching a user's specific address book.  (uses the DesignerAuth.endpointAuth)*/
    addressBook: z
      .string()
      .url()
      .describe(
        "The endpoint URL for fetching a user's specific address book.  (uses the DesignerAuth.endpointAuth)",
      ),
    /**The endpoint URL for uploading a new address book for the user.  (uses the DesignerAuth.endpointAuth)*/
    upload: z
      .string()
      .url()
      .describe(
        "The endpoint URL for uploading a new address book for the user.  (uses the DesignerAuth.endpointAuth)",
      ),
  })
  .strict();
type _DesignerAddressEndpointsSchema = typeof _DesignerAddressEndpoints;
export interface DesignerAddressEndpointsSchema extends _DesignerAddressEndpointsSchema {}
export const DesignerAddressEndpoints: DesignerAddressEndpointsSchema =
  _DesignerAddressEndpoints;
export type DesignerAddressEndpoints = z.infer<typeof DesignerAddressEndpoints>;
