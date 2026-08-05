import { z } from "zod";
declare const _DesignerAddressBookUploadResponse: z.ZodUnion<readonly [import("./DesignerAddressBookUploadSuccessResponse.js").DesignerAddressBookUploadSuccessResponseSchema, import("./DesignerAddressBookUploadErrorResponse.js").DesignerAddressBookUploadErrorResponseSchema]>;
type _DesignerAddressBookUploadResponseSchema = typeof _DesignerAddressBookUploadResponse;
export interface DesignerAddressBookUploadResponseSchema extends _DesignerAddressBookUploadResponseSchema {
}
/**Response for uploading an address book.*/
export declare const DesignerAddressBookUploadResponse: DesignerAddressBookUploadResponseSchema;
export type DesignerAddressBookUploadResponse = z.infer<typeof DesignerAddressBookUploadResponse>;
export {};
//# sourceMappingURL=DesignerAddressBookUploadResponse.d.ts.map