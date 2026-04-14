import { z } from "zod";
import { AddressBookItem } from "./AddressBookItem.js";

/**A single customer address book.*/
export const AddressBook = z
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
      .array(AddressBookItem)
      .describe("Addresses within the address book")
      .optional(),
    /**A single address within an address book.*/
    measurementAddress: AddressBookItem.optional(),
    /**Last modified date time for the address book.*/
    lastModified: z
      .string()
      .datetime({ offset: true })
      .describe("Last modified date time for the address book.")
      .optional(),
  })
  .strict()
  .describe("A single customer address book.");
export type AddressBook = z.infer<typeof AddressBook>;
