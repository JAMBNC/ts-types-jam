import { z } from "zod";
import { DesignerAddressBook } from "./DesignerAddressBook.js";
/**The success response from uploading an address book.*/
export const DesignerAddressBookUploadSuccessResponse = z
    .object({
    /**A single customer address book.*/
    addressBook: DesignerAddressBook,
    success: z.literal(true),
})
    .strict()
    .describe("The success response from uploading an address book.");
