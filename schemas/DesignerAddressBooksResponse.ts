import { z } from "zod";

const _DesignerAddressBooksResponse = z
  .object({
    /**The list of address books for the customer.*/
    addressBooks: z
      .array(
        z
          .object({
            /**The unique identifier for the address book.*/
            bookId: z
              .string()
              .describe("The unique identifier for the address book."),
            /**The address book's name to use for display.*/
            name: z
              .string()
              .describe("The address book's name to use for display."),
          })
          .strict()
          .describe("Address book display name and id"),
      )
      .describe("The list of address books for the customer.")
      .optional(),
  })
  .strict()
  .describe("Response for getting customer address books.");
type _DesignerAddressBooksResponseSchema = typeof _DesignerAddressBooksResponse;
export interface DesignerAddressBooksResponseSchema extends _DesignerAddressBooksResponseSchema {}
/**Response for getting customer address books.*/
export const DesignerAddressBooksResponse: DesignerAddressBooksResponseSchema =
  _DesignerAddressBooksResponse;
export type DesignerAddressBooksResponse = z.infer<
  typeof DesignerAddressBooksResponse
>;
