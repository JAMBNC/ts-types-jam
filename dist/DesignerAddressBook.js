import { z } from "zod";
import { DesignerAddressBookItem } from "./DesignerAddressBookItem.js";
/**A single customer address book.*/
export const DesignerAddressBook = z
    .object({
    /**The unique identifier for the address book.*/
    bookId: z
        .string()
        .describe("The unique identifier for the address book.")
        .optional(),
    /**The address book's name.*/
    name: z.string().describe("The address book's name.").optional(),
    /**Addresses within the address book*/
    addresses: z
        .array(DesignerAddressBookItem)
        .describe("Addresses within the address book")
        .optional(),
    /**A single address within an address book.*/
    measurementAddress: DesignerAddressBookItem.optional(),
    /**Last modified date time for the address book.*/
    lastModified: z
        .string()
        .datetime({ offset: true })
        .describe("Last modified date time for the address book.")
        .optional(),
})
    .strict()
    .describe("A single customer address book.");
