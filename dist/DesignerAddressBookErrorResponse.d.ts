import { z } from "zod";
/**Error response for getting a single address book.*/
export declare const DesignerAddressBookErrorResponse: z.ZodObject<{
    error: z.ZodString;
    success: z.ZodLiteral<false>;
}, z.core.$strict>;
export type DesignerAddressBookErrorResponse = z.infer<typeof DesignerAddressBookErrorResponse>;
//# sourceMappingURL=DesignerAddressBookErrorResponse.d.ts.map