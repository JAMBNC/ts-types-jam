import { z } from "zod";
import { DesignerMediaRenditionBaseInfo } from "./DesignerMediaRenditionBaseInfo.js";
import { RenditionChannel } from "./RenditionChannel.js";

/**The color rendition data returned on a successful media rendition request.*/
export const DesignerMediaRenditionFoilInfo = z
  .intersection(
    DesignerMediaRenditionBaseInfo,
    z.intersection(
      z
        .object({
          /**A single color-profile rendition (e.g. rgb or cmyk) with its source metadata and output URL.*/
          bw: RenditionChannel.optional(),
          /**A single color-profile rendition (e.g. rgb or cmyk) with its source metadata and output URL.*/
          cmyk: RenditionChannel,
          /**The rendition type.*/
          type: z.literal("foil").describe("The rendition type."),
        })
        .passthrough(),
      z.record(z.string(), z.never()),
    ),
  )
  .describe(
    "The color rendition data returned on a successful media rendition request.",
  );
export type DesignerMediaRenditionFoilInfo = z.infer<
  typeof DesignerMediaRenditionFoilInfo
>;
