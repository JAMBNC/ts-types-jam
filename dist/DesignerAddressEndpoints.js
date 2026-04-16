import { z } from "zod";
export const DesignerAddressEndpoints = z
    .object({
    /**The endpoint URL for fetching the user's address books list.  (uses the DesignerAuth.endpointAuth)*/
    addressBooks: z
        .string()
        .url()
        .describe("The endpoint URL for fetching the user's address books list.  (uses the DesignerAuth.endpointAuth)"),
    /**The endpoint URL for fetching a user's specific address book.  (uses the DesignerAuth.endpointAuth)*/
    addressBook: z
        .string()
        .url()
        .describe("The endpoint URL for fetching a user's specific address book.  (uses the DesignerAuth.endpointAuth)"),
    /**The endpoint URL for uploading a new address book for the user.  (uses the DesignerAuth.endpointAuth)*/
    upload: z
        .string()
        .url()
        .describe("The endpoint URL for uploading a new address book for the user.  (uses the DesignerAuth.endpointAuth)"),
})
    .strict();
