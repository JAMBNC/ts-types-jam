import { z } from "zod";
const _DesignerFontEndpoints = z
    .object({
    /**The (optional) endpoint URL for retrieving all supported fonts*/
    all: z
        .string()
        .url()
        .describe("The (optional) endpoint URL for retrieving all supported fonts"),
})
    .strict();
export const DesignerFontEndpoints = _DesignerFontEndpoints;
