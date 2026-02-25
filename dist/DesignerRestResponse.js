import { z } from "zod";
import { DesignSaveResponse } from "./DesignSaveResponse.js";
import { DesignerMediaGalleryResponse } from "./DesignerMediaGalleryResponse.js";
import { DesignerMediaUploadResponse } from "./DesignerMediaUploadResponse.js";
/**A union of all possible Designer REST API response types.*/
export const DesignerRestResponse = z
    .union([
    DesignerMediaGalleryResponse,
    DesignerMediaUploadResponse,
    DesignSaveResponse,
])
    .describe("A union of all possible Designer REST API response types.");
