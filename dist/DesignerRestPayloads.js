import { z } from "zod";
import { AddressBookRequest } from "./AddressBookRequest.js";
import { AddressBookResponse } from "./AddressBookResponse.js";
import { AddressBookUploadRequest } from "./AddressBookUploadRequest.js";
import { AddressBookUploadResponse } from "./AddressBookUploadResponse.js";
import { AddressBooksResponse } from "./AddressBooksResponse.js";
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
    AddressBooksResponse,
    AddressBookRequest,
    AddressBookResponse,
    AddressBookUploadRequest,
    AddressBookUploadResponse,
])
    .describe("A union of all possible Designer REST API request and response types.");
