import { z } from "zod";

/**Request for getting a single address book.*/
export const DesignerAddressBookRequest = z
  .object({
    /**The address book request payload.*/
    data: z
      .object({
        /**The unique identifier for the address book.*/
        bookId: z
          .string()
          .describe("The unique identifier for the address book."),
      })
      .strict()
      .describe("The address book request payload.")
      .optional(),
  })
  .passthrough()
  .describe("Request for getting a single address book.");
export type DesignerAddressBookRequest = z.infer<
  typeof DesignerAddressBookRequest
>;
