import { z } from "zod";
declare const _ShoutOutType: z.ZodEnum<{
    category: "category";
    generic: "generic";
    group: "group";
    product: "product";
    similar: "similar";
}>;
type _ShoutOutTypeSchema = typeof _ShoutOutType;
export interface ShoutOutTypeSchema extends _ShoutOutTypeSchema {
}
export declare const ShoutOutType: ShoutOutTypeSchema;
export type ShoutOutType = z.infer<typeof ShoutOutType>;
export {};
//# sourceMappingURL=ShoutOutType.d.ts.map