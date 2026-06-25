import { z } from "zod";
import { DesignerMediaRenditionBaseRequestData } from "./DesignerMediaRenditionBaseRequestData.js";
import { DesignerMediaRenditionFoilRequestData } from "./DesignerMediaRenditionFoilRequestData.js";
/**The request body for the media rendition endpoint.*/
export const DesignerMediaRenditionRequest = z
    .object({
    data: z.union([
        DesignerMediaRenditionBaseRequestData,
        DesignerMediaRenditionFoilRequestData,
    ]),
})
    .strict()
    .describe("The request body for the media rendition endpoint.");
