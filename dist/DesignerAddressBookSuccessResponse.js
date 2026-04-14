import { z } from "zod";
import { DesignerAddressBook } from "./DesignerAddressBook.js";
/**Success response for getting a single address book.*/
export const DesignerAddressBookSuccessResponse = z
    .object({
    /**A single customer address book.*/
    addressBook: DesignerAddressBook,
    success: z.literal(true),
})
    .strict()
    .describe("Success response for getting a single address book.");
