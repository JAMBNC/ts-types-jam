import { z } from "zod";
export const DesignerFontEndpoints = z
    .object({
    /**The (optional) endpoint URL for retrieving all supported fonts*/
    all: z
        .string()
        .url()
        .describe("The (optional) endpoint URL for retrieving all supported fonts")
        .optional(),
    /**The endpoint URL for retrieving a font file by uuid */
    get: z
        .string()
        .url()
        .describe("The endpoint URL for retrieving a font file by uuid "),
})
    .passthrough();
