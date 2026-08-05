import { z } from "zod";
declare const _DesignerAddressBookErrorResponse: z.ZodObject<{
    error: z.ZodString;
    success: z.ZodLiteral<false>;
}, z.core.$strict>;
type _DesignerAddressBookErrorResponseSchema = typeof _DesignerAddressBookErrorResponse;
export interface DesignerAddressBookErrorResponseSchema extends _DesignerAddressBookErrorResponseSchema {
}
/**Error response for getting a single address book.*/
export declare const DesignerAddressBookErrorResponse: DesignerAddressBookErrorResponseSchema;
export type DesignerAddressBookErrorResponse = z.infer<typeof DesignerAddressBookErrorResponse>;
export {};
//# sourceMappingURL=DesignerAddressBookErrorResponse.d.ts.map