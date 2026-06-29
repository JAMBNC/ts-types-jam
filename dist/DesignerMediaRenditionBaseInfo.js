import { z } from "zod";
/**The shared rendition data returned on a successful media rendition request.*/
export const DesignerMediaRenditionBaseInfo = z
    .object({
    /**Whether the media is a vector graphic*/
    isVector: z.boolean().describe("Whether the media is a vector graphic"),
    /**The unique identifier for the media item.*/
    mediaId: z.string().describe("The unique identifier for the media item."),
    /**Whether the media was uploaded by a guest user.*/
    guest: z
        .boolean()
        .describe("Whether the media was uploaded by a guest user."),
})
    .passthrough()
    .describe("The shared rendition data returned on a successful media rendition request.");
