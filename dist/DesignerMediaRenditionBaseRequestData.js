import { z } from "zod";
import { DesignerMediaSpotRecipe } from "./DesignerMediaSpotRecipe.js";
import { Process } from "./Process.js";
const _DesignerMediaRenditionBaseRequestData = z
    .object({
    /**Defines how visual content is transferred to the medium.*/
    process: Process,
    /**Everything the server needs to separate a raster into spot inks: the inks, the colour clusters fusion matched to them, and whether the customer kept the white background.*/
    spot: DesignerMediaSpotRecipe.optional(),
    /**Keep the white background fusion would otherwise remove from a raster: the white touching the image border. Absent means it is removed from the display copy and the print file.*/
    keepBackground: z
        .boolean()
        .describe("Keep the white background fusion would otherwise remove from a raster: the white touching the image border. Absent means it is removed from the display copy and the print file.")
        .optional(),
})
    .strict()
    .describe("The request body data for the media rendition endpoint for basic requests that require only process");
/**The request body data for the media rendition endpoint for basic requests that require only process*/
export const DesignerMediaRenditionBaseRequestData = _DesignerMediaRenditionBaseRequestData;
