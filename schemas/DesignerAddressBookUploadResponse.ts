import { z } from "zod";
import { DesignerAddressBookUploadErrorResponse } from "./DesignerAddressBookUploadErrorResponse.js";
import { DesignerAddressBookUploadSuccessResponse } from "./DesignerAddressBookUploadSuccessResponse.js";

/**Response for uploading an address book.*/
export const DesignerAddressBookUploadResponse = z
  .union([
    DesignerAddressBookUploadSuccessResponse,
    DesignerAddressBookUploadErrorResponse,
  ])
  .describe("Response for uploading an address book.");
export type DesignerAddressBookUploadResponse = z.infer<
  typeof DesignerAddressBookUploadResponse
>;
