import { z } from "zod";
declare const _DesignerAddressBookUploadRequest: z.ZodObject<{
    data: z.ZodObject<{
        fileName: z.ZodOptional<z.ZodString>;
        addressBook64: z.ZodString;
        contentType: z.ZodOptional<z.ZodString>;
        designUuid: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strict>;
type _DesignerAddressBookUploadRequestSchema = typeof _DesignerAddressBookUploadRequest;
export interface DesignerAddressBookUploadRequestSchema extends _DesignerAddressBookUploadRequestSchema {
}
/**The request body for the address book upload endpoint.*/
export declare const DesignerAddressBookUploadRequest: DesignerAddressBookUploadRequestSchema;
export type DesignerAddressBookUploadRequest = z.infer<typeof DesignerAddressBookUploadRequest>;
export {};
//# sourceMappingURL=DesignerAddressBookUploadRequest.d.ts.map