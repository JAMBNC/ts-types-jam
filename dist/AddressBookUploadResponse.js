import { z } from "zod";
import { AddressBookUploadErrorResponse } from "./AddressBookUploadErrorResponse.js";
import { AddressBookUploadSuccessResponse } from "./AddressBookUploadSuccessResponse.js";
/**Response for uploading an address book.*/
export const AddressBookUploadResponse = z
    .union([AddressBookUploadSuccessResponse, AddressBookUploadErrorResponse])
    .describe("Response for uploading an address book.");
