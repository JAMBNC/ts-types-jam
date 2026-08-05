import { z } from "zod";
declare const _Method: z.ZodEnum<{
    CASH: "CASH";
    CREDIT_CARD: "CREDIT_CARD";
    ON_ACCOUNT: "ON_ACCOUNT";
    PO: "PO";
}>;
type _MethodSchema = typeof _Method;
export interface MethodSchema extends _MethodSchema {
}
export declare const Method: MethodSchema;
export type Method = z.infer<typeof Method>;
export {};
//# sourceMappingURL=Method.d.ts.map