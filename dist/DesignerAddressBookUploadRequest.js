import { z } from "zod";
/**The request body for the address book upload endpoint.*/
export const DesignerAddressBookUploadRequest = z
    .object({
    /**The address bookupload payload.*/
    data: z
        .object({
        /**Name of the file used for uploading*/
        fileName: z
            .string()
            .describe("Name of the file used for uploading")
            .optional(),
        /**The base64-encoded binary content of the address book file.*/
        addressBook64: z
            .string()
            .base64()
            .describe("The base64-encoded binary content of the address book file."),
        /**The MIME type of the media file (e.g. "image/csv").*/
        contentType: z
            .string()
            .describe('The MIME type of the media file (e.g. "image/csv").')
            .optional(),
        /**The uuid for the design related to this address upload.*/
        designUuid: z
            .string()
            .regex(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)
            .describe("The uuid for the design related to this address upload.")
            .optional(),
    })
        .strict()
        .describe("The address bookupload payload."),
})
    .strict()
    .describe("The request body for the address book upload endpoint.");
