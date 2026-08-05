import { z } from "zod";
declare const _DesignerAddressBookUploadErrorResponse: z.ZodObject<{
    error: z.ZodOptional<z.ZodString>;
    success: z.ZodLiteral<false>;
}, z.core.$strict>;
type _DesignerAddressBookUploadErrorResponseSchema = typeof _DesignerAddressBookUploadErrorResponse;
export interface DesignerAddressBookUploadErrorResponseSchema extends _DesignerAddressBookUploadErrorResponseSchema {
}
/**The error response from uploading an address book.*/
export declare const DesignerAddressBookUploadErrorResponse: DesignerAddressBookUploadErrorResponseSchema;
export type DesignerAddressBookUploadErrorResponse = z.infer<typeof DesignerAddressBookUploadErrorResponse>;
export {};
//# sourceMappingURL=DesignerAddressBookUploadErrorResponse.d.ts.map