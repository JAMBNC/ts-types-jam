import { z } from "zod";
import { MediaEntry } from "./MediaEntry.js";
/**The response from the media gallery endpoint.*/
export const DesignerMediaGalleryResponse = z
    .object({
    /**The current page number.*/
    page: z.number().int().gte(1).describe("The current page number."),
    /**Whether there are more pages of results available.*/
    hasNextPage: z
        .boolean()
        .describe("Whether there are more pages of results available."),
    /**The list of media items on the current page.*/
    images: z
        .array(MediaEntry)
        .describe("The list of media items on the current page."),
})
    .strict()
    .describe("The response from the media gallery endpoint.");
