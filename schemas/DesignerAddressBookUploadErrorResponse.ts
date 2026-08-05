import { z } from "zod";

const _DesignerAddressBookUploadErrorResponse = z
  .object({
    /**A message describing why the upload failed.*/
    error: z
      .string()
      .describe("A message describing why the upload failed.")
      .optional(),
    success: z.literal(false),
  })
  .strict()
  .describe("The error response from uploading an address book.");
type _DesignerAddressBookUploadErrorResponseSchema =
  typeof _DesignerAddressBookUploadErrorResponse;
export interface DesignerAddressBookUploadErrorResponseSchema extends _DesignerAddressBookUploadErrorResponseSchema {}
/**The error response from uploading an address book.*/
export const DesignerAddressBookUploadErrorResponse: DesignerAddressBookUploadErrorResponseSchema =
  _DesignerAddressBookUploadErrorResponse;
export type DesignerAddressBookUploadErrorResponse = z.infer<
  typeof DesignerAddressBookUploadErrorResponse
>;
