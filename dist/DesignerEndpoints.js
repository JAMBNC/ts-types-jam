import { z } from "zod";
export const DesignerEndpoints = z.object({
    design: z.object({
        save: z
            .string()
            .url()
            .describe("The endpoint URL for saving the designer data"),
    }),
    image: z.object({
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
    }),
    fonts: z.object({
        all: z
            .string()
            .url()
            .describe("The (optional) endpoint URL for retrieving all supported fonts")
            .optional(),
        get: z
            .string()
            .url()
            .describe("The endpoint URL for retrieving a font file by uuid "),
    }),
});
