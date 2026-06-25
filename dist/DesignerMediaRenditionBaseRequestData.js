import { z } from "zod";
import { Process } from "./Process.js";
/**The request body data for the media rendition endpoint for basic requests that require only process*/
export const DesignerMediaRenditionBaseRequestData = z
    .object({
    process: z.intersection(Process, z
        .any()
        .refine((value) => !z.literal("foil").safeParse(value).success, "Invalid input: Should NOT be valid against schema")),
})
    .strict()
    .describe("The request body data for the media rendition endpoint for basic requests that require only process");
