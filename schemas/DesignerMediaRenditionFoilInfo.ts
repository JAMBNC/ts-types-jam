import { z } from "zod";
import { RenditionChannel } from "./RenditionChannel.js";

/**The color rendition data returned on a successful media rendition request.*/
export const DesignerMediaRenditionFoilInfo = z
  .object({
    /**A single color-profile rendition (e.g. rgb or cmyk) with its source metadata and output URL.*/
    bw: RenditionChannel,
    /**A single color-profile rendition (e.g. rgb or cmyk) with its source metadata and output URL.*/
    cmyk: RenditionChannel,
    /**The rendition type.*/
    type: z.literal("foil").describe("The rendition type."),
  })
  .passthrough()
  .and(
    z
      .object({
        /**Whether the media is a vector graphic*/
        isVector: z.boolean().describe("Whether the media is a vector graphic"),
        /**The unique identifier for the media item.*/
        mediaId: z
          .string()
          .describe("The unique identifier for the media item."),
        /**Whether the media was uploaded by a guest user.*/
        guest: z
          .boolean()
          .describe("Whether the media was uploaded by a guest user."),
      })
      .passthrough()
      .describe(
        "The shared rendition data returned on a successful media rendition request.",
      ),
  )
  .describe(
    "The color rendition data returned on a successful media rendition request.",
  );
export type DesignerMediaRenditionFoilInfo = z.infer<
  typeof DesignerMediaRenditionFoilInfo
>;
