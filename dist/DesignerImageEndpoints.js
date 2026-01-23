import { z } from "zod/v4";
export const DesignerImageEndpoints = z.object({
    gallery: z
        .string()
        .url()
        .describe("The endpoint URL for fetching the users image gallery. (uses the DesignerAuth.endpointAuth)")
        .optional(),
    upload: z
        .string()
        .url()
        .describe("The endpoint URL for uploading a user image (uses the DesignerAuth.endpointAuth)")
        .optional(),
    delete: z
        .string()
        .url()
        .describe("The endpoint URL for removing an image from the gallery. (uses the DesignerAuth.endpointAuth)")
        .optional(),
    rendition: z
        .string()
        .url()
        .describe("The endpoint URL for fetching a rendition of an image from the gallery. (uses the DesignerAuth.endpointAuth)")
        .optional(),
});
