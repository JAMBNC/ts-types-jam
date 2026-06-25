import { z } from "zod";
/**The request body data for the media rendition endpoint for basic requests that require only process*/
export const DesignerMediaRenditionBaseRequestData = z
    .object({
    /**Defines how visual content is transferred to the medium.*/
    process: z
        .enum([
        "offset",
        "digital",
        "emboss",
        "screen",
        "inkjet",
        "flexography",
        "sublimation",
        "thermal",
    ])
        .describe("Defines how visual content is transferred to the medium."),
})
    .strict()
    .describe("The request body data for the media rendition endpoint for basic requests that require only process");
