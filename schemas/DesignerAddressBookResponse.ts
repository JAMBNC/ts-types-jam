import { z } from "zod";
import { DesignerAddressBookErrorResponse } from "./DesignerAddressBookErrorResponse.js";
import { DesignerAddressBookSuccessResponse } from "./DesignerAddressBookSuccessResponse.js";

/**Response for getting a single address book.*/
export const DesignerAddressBookResponse = z
  .union([DesignerAddressBookSuccessResponse, DesignerAddressBookErrorResponse])
  .describe("Response for getting a single address book.");
export type DesignerAddressBookResponse = z.infer<
  typeof DesignerAddressBookResponse
>;
