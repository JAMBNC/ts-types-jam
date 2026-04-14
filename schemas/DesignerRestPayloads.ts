import { z } from "zod";
import { DesignerAddressBookRequest } from "./DesignerAddressBookRequest.js";
import { DesignerAddressBookResponse } from "./DesignerAddressBookResponse.js";
import { DesignerAddressBookUploadRequest } from "./DesignerAddressBookUploadRequest.js";
import { DesignerAddressBookUploadResponse } from "./DesignerAddressBookUploadResponse.js";
import { DesignerAddressBooksResponse } from "./DesignerAddressBooksResponse.js";
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
    DesignerAddressBooksResponse,
    DesignerAddressBookRequest,
    DesignerAddressBookResponse,
    DesignerAddressBookUploadRequest,
    DesignerAddressBookUploadResponse,
  ])
  .describe(
    "A union of all possible Designer REST API request and response types.",
  );
export type DesignerRestPayloads = z.infer<typeof DesignerRestPayloads>;
