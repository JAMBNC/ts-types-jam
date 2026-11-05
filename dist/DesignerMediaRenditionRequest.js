import { z } from "zod";
import { DesignerMediaRenditionBaseRequestData } from "./DesignerMediaRenditionBaseRequestData.js";
import { DesignerMediaRenditionFoilRequestData } from "./DesignerMediaRenditionFoilRequestData.js";
import { DesignerMediaRenditionInkRequestData } from "./DesignerMediaRenditionInkRequestData.js";
const _DesignerMediaRenditionRequest = z
    .object({
    data: z.union([
        DesignerMediaRenditionBaseRequestData,
        DesignerMediaRenditionFoilRequestData,
        DesignerMediaRenditionInkRequestData,
    ]),
})
    .strict()
    .describe("The request body for the media rendition endpoint.");
/**The request body for the media rendition endpoint.*/
export const DesignerMediaRenditionRequest = _DesignerMediaRenditionRequest;
