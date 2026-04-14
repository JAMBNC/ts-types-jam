import { z } from "zod";
import { AddressBook } from "./AddressBook.js";
/**The success response from uploading an address book.*/
export const AddressBookUploadSuccessResponse = z
    .object({
    /**A single customer address book.*/
    addressBook: AddressBook,
    success: z.literal(true),
})
    .strict()
    .describe("The success response from uploading an address book.");
