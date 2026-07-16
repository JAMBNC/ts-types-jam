import { z } from "zod";
export declare const ShoutOutType: z.ZodEnum<{
    category: "category";
    generic: "generic";
    group: "group";
    product: "product";
    similar: "similar";
}>;
export type ShoutOutType = z.infer<typeof ShoutOutType>;
//# sourceMappingURL=ShoutOutType.d.ts.map