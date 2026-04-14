import { z } from "zod";
/**The error response from uploading an address book.*/
export declare const DesignerAddressBookUploadErrorResponse: z.ZodObject<{
    error: z.ZodOptional<z.ZodString>;
    success: z.ZodLiteral<false>;
}, z.core.$strict>;
export type DesignerAddressBookUploadErrorResponse = z.infer<typeof DesignerAddressBookUploadErrorResponse>;
//# sourceMappingURL=DesignerAddressBookUploadErrorResponse.d.ts.map