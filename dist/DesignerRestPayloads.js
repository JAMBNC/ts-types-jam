import { z } from "zod";
import { DesignSaveResponse } from "./DesignSaveResponse.js";
import { DesignerMediaGalleryResponse } from "./DesignerMediaGalleryResponse.js";
import { DesignerMediaRenditionResponse } from "./DesignerMediaRenditionResponse.js";
import { DesignerMediaUploadRequest } from "./DesignerMediaUploadRequest.js";
import { DesignerMediaUploadResponse } from "./DesignerMediaUploadResponse.js";
/**A union of all possible Designer REST API request and response types.*/
export const DesignerRestPayloads = z
    .union([
    DesignerMediaGalleryResponse,
    DesignerMediaUploadRequest,
    DesignerMediaUploadResponse,
    DesignerMediaRenditionResponse,
    DesignSaveResponse,
])
    .describe("A union of all possible Designer REST API request and response types.");
