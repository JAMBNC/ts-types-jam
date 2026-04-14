import { z } from "zod";
/**A single address within an address book.*/
export declare const AddressBookItem: z.ZodObject<{
    addressId: z.ZodOptional<z.ZodString>;
    bookId: z.ZodOptional<z.ZodString>;
    isCompany: z.ZodOptional<z.ZodBoolean>;
    nameLines: z.ZodOptional<z.ZodArray<z.ZodString>>;
    streets: z.ZodOptional<z.ZodArray<z.ZodString>>;
    city: z.ZodOptional<z.ZodString>;
    state: z.ZodOptional<z.ZodString>;
    postal: z.ZodOptional<z.ZodString>;
    country: z.ZodOptional<z.ZodString>;
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type AddressBookItem = z.infer<typeof AddressBookItem>;
//# sourceMappingURL=AddressBookItem.d.ts.map