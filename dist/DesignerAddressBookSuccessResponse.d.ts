import { z } from "zod";
declare const _DesignerAddressBookSuccessResponse: z.ZodObject<{
    addressBook: import("./DesignerAddressBook.js").DesignerAddressBookSchema;
    success: z.ZodLiteral<true>;
}, z.core.$strict>;
type _DesignerAddressBookSuccessResponseSchema = typeof _DesignerAddressBookSuccessResponse;
export interface DesignerAddressBookSuccessResponseSchema extends _DesignerAddressBookSuccessResponseSchema {
}
/**Success response for getting a single address book.*/
export declare const DesignerAddressBookSuccessResponse: DesignerAddressBookSuccessResponseSchema;
export type DesignerAddressBookSuccessResponse = z.infer<typeof DesignerAddressBookSuccessResponse>;
export {};
//# sourceMappingURL=DesignerAddressBookSuccessResponse.d.ts.map