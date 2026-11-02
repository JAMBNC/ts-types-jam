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
        .describe("How many rows of the file were imported. Present when the request asked for reportDetails.")
        .optional(),
    /**The rows left out of the import and why. Present when the request asked for reportDetails.*/
    skipped: z
        .array(DesignerAddressBookSkippedRow)
        .describe("The rows left out of the import and why. Present when the request asked for reportDetails.")
        .optional(),
    /**Things the customer should check before ordering, such as ignored columns or rows with no street address. Present when the request asked for reportDetails.*/
    warnings: z
        .array(z.string())
        .describe("Things the customer should check before ordering, such as ignored columns or rows with no street address. Present when the request asked for reportDetails.")
        .optional(),
    /**What the import fixed in the file on its own, such as a column read under our name for it, a country filled in from the state, or a misspelled country read as the nearest one. Present when the request asked for reportDetails.*/
    corrections: z
        .array(z.string())
        .describe("What the import fixed in the file on its own, such as a column read under our name for it, a country filled in from the state, or a misspelled country read as the nearest one. Present when the request asked for reportDetails.")
        .optional(),
})
    .strict()
    .describe("The success response from uploading an address book.");
/**The success response from uploading an address book.*/
export const DesignerAddressBookUploadSuccessResponse = _DesignerAddressBookUploadSuccessResponse;
