import { z } from "zod";
/**Response for getting customer address books.*/
export declare const DesignerAddressBooksResponse: z.ZodObject<{
    addressBooks: z.ZodOptional<z.ZodArray<z.ZodObject<{
        bookId: z.ZodString;
        name: z.ZodString;
    }, z.core.$strict>>>;
}, z.core.$strict>;
export type DesignerAddressBooksResponse = z.infer<typeof DesignerAddressBooksResponse>;
//# sourceMappingURL=DesignerAddressBooksResponse.d.ts.map