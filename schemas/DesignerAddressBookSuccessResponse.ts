import { z } from "zod";
import { DesignerAddressBook } from "./DesignerAddressBook.js";

const _DesignerAddressBookSuccessResponse = z
  .object({
    /**A single customer address book.*/
    addressBook: DesignerAddressBook,
    success: z.literal(true),
  })
  .strict()
  .describe("Success response for getting a single address book.");
type _DesignerAddressBookSuccessResponseSchema =
  typeof _DesignerAddressBookSuccessResponse;
export interface DesignerAddressBookSuccessResponseSchema extends _DesignerAddressBookSuccessResponseSchema {}
/**Success response for getting a single address book.*/
export const DesignerAddressBookSuccessResponse: DesignerAddressBookSuccessResponseSchema =
  _DesignerAddressBookSuccessResponse;
export type DesignerAddressBookSuccessResponse = z.infer<
  typeof DesignerAddressBookSuccessResponse
>;
