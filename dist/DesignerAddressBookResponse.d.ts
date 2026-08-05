import { z } from "zod";
declare const _DesignerAddressBookResponse: z.ZodUnion<readonly [import("./DesignerAddressBookSuccessResponse.js").DesignerAddressBookSuccessResponseSchema, import("./DesignerAddressBookErrorResponse.js").DesignerAddressBookErrorResponseSchema]>;
type _DesignerAddressBookResponseSchema = typeof _DesignerAddressBookResponse;
export interface DesignerAddressBookResponseSchema extends _DesignerAddressBookResponseSchema {
}
/**Response for getting a single address book.*/
export declare const DesignerAddressBookResponse: DesignerAddressBookResponseSchema;
export type DesignerAddressBookResponse = z.infer<typeof DesignerAddressBookResponse>;
export {};
//# sourceMappingURL=DesignerAddressBookResponse.d.ts.map