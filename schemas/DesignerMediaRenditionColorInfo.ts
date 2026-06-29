import { z } from "zod";
import { DesignerMediaRenditionBaseInfo } from "./DesignerMediaRenditionBaseInfo.js";
import { RenditionChannel } from "./RenditionChannel.js";

/**The color rendition data returned on a successful media rendition request.*/
export const DesignerMediaRenditionColorInfo = z
  .intersection(
    DesignerMediaRenditionBaseInfo,
    z.intersection(
      z
        .object({
          /**A single color-profile rendition (e.g. rgb or cmyk) with its source metadata and output URL.*/
          rgb: RenditionChannel,
          /**A single color-profile rendition (e.g. rgb or cmyk) with its source metadata and output URL.*/
          cmyk: RenditionChannel,
          /**Analysis of the colors present in the media.*/
          colorAnalysis: z
            .object({
              /**Whether the media contains process CMY colors.*/
              hasProcessCMY: z
                .boolean()
                .describe("Whether the media contains process CMY colors."),
              /**Whether the media contains process black.*/
              hasProcessBlack: z
                .boolean()
                .describe("Whether the media contains process black."),
              /**The names of the layers in the media.*/
              layerNames: z
                .array(z.string())
                .describe("The names of the layers in the media."),
              /**The spot colors present in the media.*/
              spotColors: z
                .array(
                  z
                    .object({
                      values: z.array(z.string()),
                      cmykApproximation: z
                        .object({
                          c: z.number(),
                          m: z.number(),
                          y: z.number(),
                          k: z.number(),
                          name: z.string(),
                        })
                        .strict(),
                    })
                    .strict(),
                )
                .describe("The spot colors present in the media."),
            })
            .strict()
            .describe("Analysis of the colors present in the media."),
          /**The rendition type.*/
          type: z.literal("color").describe("The rendition type."),
        })
        .passthrough(),
      z.record(z.string(), z.never()),
    ),
  )
  .describe(
    "The color rendition data returned on a successful media rendition request.",
  );
export type DesignerMediaRenditionColorInfo = z.infer<
  typeof DesignerMediaRenditionColorInfo
>;
