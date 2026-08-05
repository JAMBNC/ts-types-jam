import { z } from "zod";
import { DesignerAddressBook } from "./DesignerAddressBook.js";

const _DesignerAddressBookUploadSuccessResponse = z
  .object({
    /**A single customer address book.*/
    addressBook: DesignerAddressBook,
    success: z.literal(true),
  })
  .strict()
  .describe("The success response from uploading an address book.");
type _DesignerAddressBookUploadSuccessResponseSchema =
  typeof _DesignerAddressBookUploadSuccessResponse;
export interface DesignerAddressBookUploadSuccessResponseSchema extends _DesignerAddressBookUploadSuccessResponseSchema {}
/**The success response from uploading an address book.*/
export const DesignerAddressBookUploadSuccessResponse: DesignerAddressBookUploadSuccessResponseSchema =
  _DesignerAddressBookUploadSuccessResponse;
export type DesignerAddressBookUploadSuccessResponse = z.infer<
  typeof DesignerAddressBookUploadSuccessResponse
>;
