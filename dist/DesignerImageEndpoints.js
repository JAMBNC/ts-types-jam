import { z } from "zod";
export const DesignerImageEndpoints = z.object({
    gallery: z
        .string()
        .url()
        .describe("The endpoint URL for fetching the users image gallery. (uses the DesignerAuth.endpointAuth)"),
    upload: z
        .string()
        .url()
        .describe("The endpoint URL for uploading a user image (uses the DesignerAuth.endpointAuth)"),
    delete: z
        .string()
        .url()
        .describe("The endpoint URL for removing an image from the gallery. (uses the DesignerAuth.endpointAuth)"),
    rendition: z
        .string()
        .url()
        .describe("The endpoint URL for fetching a rendition of an image from the gallery. (uses the DesignerAuth.endpointAuth)"),
});
