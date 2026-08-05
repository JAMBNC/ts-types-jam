import { z } from "zod";
const _DesignerColorEndpoints = z
    .object({
    /**The endpoint URL for retrieving all supported colors + vendor colors*/
    all: z
        .string()
        .url()
        .describe("The endpoint URL for retrieving all supported colors + vendor colors"),
    /**The endpoint URL for retrieving color palettes*/
    palettes: z
        .string()
        .url()
        .describe("The endpoint URL for retrieving color palettes"),
})
    .strict();
export const DesignerColorEndpoints = _DesignerColorEndpoints;
