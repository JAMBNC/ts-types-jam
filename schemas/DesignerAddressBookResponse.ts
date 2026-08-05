import { z } from "zod";
import { DesignerAddressBookErrorResponse } from "./DesignerAddressBookErrorResponse.js";
import { DesignerAddressBookSuccessResponse } from "./DesignerAddressBookSuccessResponse.js";

const _DesignerAddressBookResponse = z
  .union([DesignerAddressBookSuccessResponse, DesignerAddressBookErrorResponse])
  .describe("Response for getting a single address book.");
type _DesignerAddressBookResponseSchema = typeof _DesignerAddressBookResponse;
export interface DesignerAddressBookResponseSchema extends _DesignerAddressBookResponseSchema {}
/**Response for getting a single address book.*/
export const DesignerAddressBookResponse: DesignerAddressBookResponseSchema =
  _DesignerAddressBookResponse;
export type DesignerAddressBookResponse = z.infer<
  typeof DesignerAddressBookResponse
>;
