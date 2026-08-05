import { z } from "zod";
declare const _Context: z.ZodEnum<{
    product_detail: "product_detail";
    product_listing: "product_listing";
}>;
type _ContextSchema = typeof _Context;
export interface ContextSchema extends _ContextSchema {
}
export declare const Context: ContextSchema;
export type Context = z.infer<typeof Context>;
export {};
//# sourceMappingURL=Context.d.ts.map