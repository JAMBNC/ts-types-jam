import { z } from "zod";
import { DesignerAddressBook } from "./DesignerAddressBook.js";
import { DesignerAddressBookSkippedRow } from "./DesignerAddressBookSkippedRow.js";

const _DesignerAddressBookUploadSuccessResponse = z
  .object({
    /**A single customer address book.*/
    addressBook: DesignerAddressBook,
    success: z.literal(true),
    /**How many rows of the file were imported. Present when the request asked for reportDetails.*/
    imported: z
      .number()
      .int()
      .gte(0)
      .describe(
        "How many rows of the file were imported. Present when the request asked for reportDetails.",
      )
      .optional(),
    /**The rows left out of the import and why. Present when the request asked for reportDetails.*/
    skipped: z
      .array(DesignerAddressBookSkippedRow)
      .describe(
        "The rows left out of the import and why. Present when the request asked for reportDetails.",
      )
      .optional(),
    /**Things the customer should check before ordering, such as ignored columns, rows with no street address, or a country that was guessed. Present when the request asked for reportDetails.*/
    warnings: z
      .array(z.string())
      .describe(
        "Things the customer should check before ordering, such as ignored columns, rows with no street address, or a country that was guessed. Present when the request asked for reportDetails.",
      )
      .optional(),
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
