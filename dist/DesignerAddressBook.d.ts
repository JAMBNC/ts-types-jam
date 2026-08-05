import { z } from "zod";
declare const _DesignerAddressBook: z.ZodObject<{
    bookId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    addresses: z.ZodOptional<z.ZodArray<import("./DesignerAddressBookItem.js").DesignerAddressBookItemSchema>>;
    measurementAddress: z.ZodOptional<import("./DesignerAddressBookItem.js").DesignerAddressBookItemSchema>;
    lastModified: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
type _DesignerAddressBookSchema = typeof _DesignerAddressBook;
export interface DesignerAddressBookSchema extends _DesignerAddressBookSchema {
}
/**A single customer address book.*/
export declare const DesignerAddressBook: DesignerAddressBookSchema;
export type DesignerAddressBook = z.infer<typeof DesignerAddressBook>;
export {};
//# sourceMappingURL=DesignerAddressBook.d.ts.map