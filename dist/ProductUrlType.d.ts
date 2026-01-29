import { z } from "zod";
export declare const ProductUrlType: z.ZodEnum<{
    product: "product";
    yourLogoHere: "yourLogoHere";
    customProduct: "customProduct";
}>;
export type ProductUrlType = z.infer<typeof ProductUrlType>;
//# sourceMappingURL=ProductUrlType.d.ts.map