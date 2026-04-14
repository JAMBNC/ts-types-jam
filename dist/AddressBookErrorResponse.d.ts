import { z } from "zod";
/**Error response for getting a single address book.*/
export declare const AddressBookErrorResponse: z.ZodObject<{
    error: z.ZodString;
    success: z.ZodLiteral<false>;
}, z.core.$strict>;
export type AddressBookErrorResponse = z.infer<typeof AddressBookErrorResponse>;
//# sourceMappingURL=AddressBookErrorResponse.d.ts.map