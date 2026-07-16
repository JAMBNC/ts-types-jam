import { z } from "zod";
export declare const ProductUrlType: z.ZodEnum<{
    customProduct: "customProduct";
    product: "product";
    yourLogoHere: "yourLogoHere";
}>;
export type ProductUrlType = z.infer<typeof ProductUrlType>;
//# sourceMappingURL=ProductUrlType.d.ts.map