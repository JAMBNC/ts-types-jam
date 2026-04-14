import { z } from "zod";
/**The request body for the address book upload endpoint.*/
export declare const DesignerAddressBookUploadRequest: z.ZodObject<{
    data: z.ZodObject<{
        fileName: z.ZodOptional<z.ZodString>;
        addressBook64: z.ZodString;
        contentType: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerAddressBookUploadRequest = z.infer<typeof DesignerAddressBookUploadRequest>;
//# sourceMappingURL=DesignerAddressBookUploadRequest.d.ts.map