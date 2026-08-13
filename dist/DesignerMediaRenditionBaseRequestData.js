import { z } from "zod";
import { Process } from "./Process.js";
const _DesignerMediaRenditionBaseRequestData = z
    .object({
    /**Defines how visual content is transferred to the medium.*/
    process: Process,
})
    .strict()
    .describe("The request body data for the media rendition endpoint for basic requests that require only process");
/**The request body data for the media rendition endpoint for basic requests that require only process*/
export const DesignerMediaRenditionBaseRequestData = _DesignerMediaRenditionBaseRequestData;
