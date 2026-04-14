import { z } from "zod";
import { AddressBook } from "./AddressBook.js";
/**Success response for getting a single address book.*/
export const AddressBookSuccessResponse = z
    .object({
    /**A single customer address book.*/
    addressBook: AddressBook,
    success: z.literal(true),
})
    .strict()
    .describe("Success response for getting a single address book.");
