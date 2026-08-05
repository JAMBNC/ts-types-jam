import { z } from "zod";
import { DesignerAddressBookUploadErrorResponse } from "./DesignerAddressBookUploadErrorResponse.js";
import { DesignerAddressBookUploadSuccessResponse } from "./DesignerAddressBookUploadSuccessResponse.js";

const _DesignerAddressBookUploadResponse = z
  .union([
    DesignerAddressBookUploadSuccessResponse,
    DesignerAddressBookUploadErrorResponse,
  ])
  .describe("Response for uploading an address book.");
type _DesignerAddressBookUploadResponseSchema =
  typeof _DesignerAddressBookUploadResponse;
export interface DesignerAddressBookUploadResponseSchema extends _DesignerAddressBookUploadResponseSchema {}
/**Response for uploading an address book.*/
export const DesignerAddressBookUploadResponse: DesignerAddressBookUploadResponseSchema =
  _DesignerAddressBookUploadResponse;
export type DesignerAddressBookUploadResponse = z.infer<
  typeof DesignerAddressBookUploadResponse
>;
