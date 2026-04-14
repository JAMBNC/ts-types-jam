import { z } from "zod";
/**The error response from uploading an address book.*/
export declare const AddressBookUploadErrorResponse: z.ZodObject<{
    error: z.ZodOptional<z.ZodString>;
    success: z.ZodLiteral<false>;
}, z.core.$strict>;
export type AddressBookUploadErrorResponse = z.infer<typeof AddressBookUploadErrorResponse>;
//# sourceMappingURL=AddressBookUploadErrorResponse.d.ts.map