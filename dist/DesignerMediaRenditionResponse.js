import { z } from "zod";
import { RenditionChannel } from "./RenditionChannel.js";
/**The response from the media rendition endpoint.*/
export const DesignerMediaRenditionResponse = z
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
            .array(z.string())
            .describe("The spot colors present in the media."),
    })
        .strict()
        .describe("Analysis of the colors present in the media."),
    /**Whether the media is a vector graphic ("1") or raster ("0").*/
    is_vector: z
        .enum(["0", "1"])
        .describe('Whether the media is a vector graphic ("1") or raster ("0").'),
    /**Additional metadata about the media item.*/
    info: z
        .object({
        /**Whether the media is a vector graphic ("1") or raster ("0").*/
        is_vector: z
            .enum(["0", "1"])
            .describe('Whether the media is a vector graphic ("1") or raster ("0").'),
        /**The unique identifier for the media item.*/
        mediaId: z
            .string()
            .describe("The unique identifier for the media item."),
        /**Whether the media was uploaded by a guest user.*/
        guest: z
            .boolean()
            .describe("Whether the media was uploaded by a guest user."),
    })
        .strict()
        .describe("Additional metadata about the media item."),
    /**The rendition type.*/
    type: z.literal("color").describe("The rendition type."),
})
    .strict()
    .describe("The response from the media rendition endpoint.");
