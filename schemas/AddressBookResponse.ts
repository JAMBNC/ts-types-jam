import { z } from "zod";
import { AddressBookErrorResponse } from "./AddressBookErrorResponse.js";
import { AddressBookSuccessResponse } from "./AddressBookSuccessResponse.js";

/**Response for getting a single address book.*/
export const AddressBookResponse = z
  .union([AddressBookSuccessResponse, AddressBookErrorResponse])
  .describe("Response for getting a single address book.");
export type AddressBookResponse = z.infer<typeof AddressBookResponse>;
