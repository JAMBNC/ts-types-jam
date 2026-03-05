import { z } from "zod";
import { DesignerMediaDeleteResponse } from "./DesignerMediaDeleteResponse.js";
import { DesignerMediaGalleryResponse } from "./DesignerMediaGalleryResponse.js";
import { DesignerMediaRenditionRequest } from "./DesignerMediaRenditionRequest.js";
import { DesignerMediaRenditionResponse } from "./DesignerMediaRenditionResponse.js";
import { DesignerMediaUploadRequest } from "./DesignerMediaUploadRequest.js";
import { DesignerMediaUploadResponse } from "./DesignerMediaUploadResponse.js";
import { DesignerSaveResponse } from "./DesignerSaveResponse.js";
/**A union of all possible Designer REST API request and response types.*/
export const DesignerRestPayloads = z
    .union([
    DesignerMediaGalleryResponse,
    DesignerMediaUploadRequest,
    DesignerMediaUploadResponse,
    DesignerMediaRenditionRequest,
    DesignerMediaRenditionResponse,
    DesignerMediaDeleteResponse,
    DesignerSaveResponse,
])
    .describe("A union of all possible Designer REST API request and response types.");
