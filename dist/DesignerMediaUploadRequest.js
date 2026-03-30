import { z } from "zod";
/**The request body for the media upload endpoint.*/
export const DesignerMediaUploadRequest = z
    .object({
    /**The media upload payload.*/
    data: z
        .object({
        /**The display label/name for the media file being uploaded.*/
        label: z
            .string()
            .describe("The display label/name for the media file being uploaded."),
        /**The base64-encoded binary content of the media file.*/
        mediaBase64: z
            .string()
            .base64()
            .describe("The base64-encoded binary content of the media file."),
        /**The MIME type of the media file (e.g. "image/png", "application/pdf").*/
        contentType: z
            .string()
            .describe('The MIME type of the media file (e.g. "image/png", "application/pdf").')
            .optional(),
    })
        .strict()
        .describe("The media upload payload."),
})
    .strict()
    .describe("The request body for the media upload endpoint.");
