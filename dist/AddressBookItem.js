import { z } from "zod";
/**A single address within an address book.*/
export const AddressBookItem = z
    .object({
    /**Id for the address.*/
    addressId: z.string().describe("Id for the address.").optional(),
    /**Id for the containing address book.*/
    bookId: z
        .string()
        .describe("Id for the containing address book.")
        .optional(),
    /**Is this a company address?*/
    isCompany: z.boolean().describe("Is this a company address?").optional(),
    /**Array of name lines to display before the street lines.*/
    nameLines: z
        .array(z.string())
        .describe("Array of name lines to display before the street lines.")
        .optional(),
    /**Array of street lines to display.*/
    streets: z
        .array(z.string())
        .describe("Array of street lines to display.")
        .optional(),
    /**Address city.*/
    city: z.string().describe("Address city.").optional(),
    /**Address state.*/
    state: z.string().describe("Address state.").optional(),
    /**Address postal code.*/
    postal: z.string().describe("Address postal code.").optional(),
    /**Country code for the address.*/
    country: z.string().describe("Country code for the address.").optional(),
    /**Address first name.*/
    firstName: z.string().describe("Address first name.").optional(),
    /**Address last name.*/
    lastName: z.string().describe("Address last name.").optional(),
    /**Created at date time for the address book item.*/
    createdAt: z
        .string()
        .datetime({ offset: true })
        .describe("Created at date time for the address book item.")
        .optional(),
})
    .strict()
    .describe("A single address within an address book.");
