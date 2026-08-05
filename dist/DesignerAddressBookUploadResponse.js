import { z } from "zod";
import { DesignerAddressBookUploadErrorResponse } from "./DesignerAddressBookUploadErrorResponse.js";
import { DesignerAddressBookUploadSuccessResponse } from "./DesignerAddressBookUploadSuccessResponse.js";
const _DesignerAddressBookUploadResponse = z
    .union([
    DesignerAddressBookUploadSuccessResponse,
    DesignerAddressBookUploadErrorResponse,
])
    .describe("Response for uploading an address book.");
/**Response for uploading an address book.*/
export const DesignerAddressBookUploadResponse = _DesignerAddressBookUploadResponse;
