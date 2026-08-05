import { z } from "zod";
declare const _DesignerAddressBooksResponse: z.ZodObject<{
    addressBooks: z.ZodOptional<z.ZodArray<z.ZodObject<{
        bookId: z.ZodString;
        name: z.ZodString;
    }, z.core.$strict>>>;
}, z.core.$strict>;
type _DesignerAddressBooksResponseSchema = typeof _DesignerAddressBooksResponse;
export interface DesignerAddressBooksResponseSchema extends _DesignerAddressBooksResponseSchema {
}
/**Response for getting customer address books.*/
export declare const DesignerAddressBooksResponse: DesignerAddressBooksResponseSchema;
export type DesignerAddressBooksResponse = z.infer<typeof DesignerAddressBooksResponse>;
export {};
//# sourceMappingURL=DesignerAddressBooksResponse.d.ts.map