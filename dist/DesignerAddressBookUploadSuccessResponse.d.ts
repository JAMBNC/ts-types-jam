import { z } from "zod";
declare const _DesignerAddressBookUploadSuccessResponse: z.ZodObject<{
    addressBook: import("./DesignerAddressBook.js").DesignerAddressBookSchema;
    success: z.ZodLiteral<true>;
    imported: z.ZodOptional<z.ZodNumber>;
    skipped: z.ZodOptional<z.ZodArray<import("./DesignerAddressBookSkippedRow.js").DesignerAddressBookSkippedRowSchema>>;
    warnings: z.ZodOptional<z.ZodArray<z.ZodString>>;
    corrections: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
type _DesignerAddressBookUploadSuccessResponseSchema = typeof _DesignerAddressBookUploadSuccessResponse;
export interface DesignerAddressBookUploadSuccessResponseSchema extends _DesignerAddressBookUploadSuccessResponseSchema {
}
/**The success response from uploading an address book.*/
export declare const DesignerAddressBookUploadSuccessResponse: DesignerAddressBookUploadSuccessResponseSchema;
export type DesignerAddressBookUploadSuccessResponse = z.infer<typeof DesignerAddressBookUploadSuccessResponse>;
export {};
//# sourceMappingURL=DesignerAddressBookUploadSuccessResponse.d.ts.map