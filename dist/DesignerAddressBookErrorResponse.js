import { z } from "zod";
const _DesignerAddressBookErrorResponse = z
    .object({
    /**A message describing why the retrieve failed.*/
    error: z.string().describe("A message describing why the retrieve failed."),
    success: z.literal(false),
})
    .strict()
    .describe("Error response for getting a single address book.");
/**Error response for getting a single address book.*/
export const DesignerAddressBookErrorResponse = _DesignerAddressBookErrorResponse;
