import { z } from "zod";

/**The error response from uploading an address book.*/
export const AddressBookUploadErrorResponse = z
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
export type AddressBookUploadErrorResponse = z.infer<
  typeof AddressBookUploadErrorResponse
>;
