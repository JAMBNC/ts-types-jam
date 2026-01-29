import { z } from "zod";
export declare const ShoutOutType: z.ZodEnum<{
    generic: "generic";
    product: "product";
    category: "category";
    group: "group";
    similar: "similar";
}>;
export type ShoutOutType = z.infer<typeof ShoutOutType>;
//# sourceMappingURL=ShoutOutType.d.ts.map