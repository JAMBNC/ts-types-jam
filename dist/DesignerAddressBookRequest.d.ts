import { z } from "zod";
/**Request for getting a single address book.*/
export declare const DesignerAddressBookRequest: z.ZodObject<{
    data: z.ZodOptional<z.ZodObject<{
        bookId: z.ZodString;
    }, z.core.$strict>>;
}, z.core.$loose>;
export type DesignerAddressBookRequest = z.infer<typeof DesignerAddressBookRequest>;
//# sourceMappingURL=DesignerAddressBookRequest.d.ts.map