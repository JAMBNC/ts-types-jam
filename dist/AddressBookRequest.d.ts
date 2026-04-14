import { z } from "zod";
/**Request for getting a single address book.*/
export declare const AddressBookRequest: z.ZodObject<{
    data: z.ZodOptional<z.ZodObject<{
        bookId: z.ZodString;
    }, z.core.$strict>>;
}, z.core.$loose>;
export type AddressBookRequest = z.infer<typeof AddressBookRequest>;
//# sourceMappingURL=AddressBookRequest.d.ts.map