import { z } from "zod";
/**The request body for the address book upload endpoint.*/
export declare const AddressBookUploadRequest: z.ZodObject<{
    data: z.ZodObject<{
        fileName: z.ZodOptional<z.ZodString>;
        addressBook64: z.ZodString;
        contentType: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type AddressBookUploadRequest = z.infer<typeof AddressBookUploadRequest>;
//# sourceMappingURL=AddressBookUploadRequest.d.ts.map