import { z } from "zod";
import { RenditionChannel } from "./RenditionChannel.js";

const _DesignerMediaRenditionPlateInfo = z
  .object({
    /**A single color-profile rendition (e.g. rgb or cmyk) with its source metadata and output URL.*/
    bw: RenditionChannel,
    /**A single color-profile rendition (e.g. rgb or cmyk) with its source metadata and output URL.*/
    cmyk: RenditionChannel,
    /**The rendition type: ink for a chosen palette ink, whiteInk for white ink.*/
    type: z
      .enum(["ink", "whiteInk"])
      .describe(
        "The rendition type: ink for a chosen palette ink, whiteInk for white ink.",
      ),
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
    "The rendition of a vector printed on one named spot plate: an ink the customer chose, or white ink.",
  );
type _DesignerMediaRenditionPlateInfoSchema =
  typeof _DesignerMediaRenditionPlateInfo;
export interface DesignerMediaRenditionPlateInfoSchema extends _DesignerMediaRenditionPlateInfoSchema {}
/**The rendition of a vector printed on one named spot plate: an ink the customer chose, or white ink.*/
export const DesignerMediaRenditionPlateInfo: DesignerMediaRenditionPlateInfoSchema =
  _DesignerMediaRenditionPlateInfo;
export type DesignerMediaRenditionPlateInfo = z.infer<
  typeof DesignerMediaRenditionPlateInfo
>;
