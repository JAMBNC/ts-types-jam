import { z } from "zod";
import { DesignerAddressBookErrorResponse } from "./DesignerAddressBookErrorResponse.js";
import { DesignerAddressBookSuccessResponse } from "./DesignerAddressBookSuccessResponse.js";
const _DesignerAddressBookResponse = z
    .union([DesignerAddressBookSuccessResponse, DesignerAddressBookErrorResponse])
    .describe("Response for getting a single address book.");
/**Response for getting a single address book.*/
export const DesignerAddressBookResponse = _DesignerAddressBookResponse;
