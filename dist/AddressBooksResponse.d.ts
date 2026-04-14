import { z } from "zod";
/**Response for getting customer address books.*/
export declare const AddressBooksResponse: z.ZodObject<{
    addressBooks: z.ZodOptional<z.ZodArray<z.ZodObject<{
        bookId: z.ZodString;
        name: z.ZodString;
    }, z.core.$strict>>>;
}, z.core.$strict>;
export type AddressBooksResponse = z.infer<typeof AddressBooksResponse>;
//# sourceMappingURL=AddressBooksResponse.d.ts.map