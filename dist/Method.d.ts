import { z } from "zod/v4";
export declare const Method: z.ZodEnum<{
    CASH: "CASH";
    PO: "PO";
    CREDIT_CARD: "CREDIT_CARD";
    ON_ACCOUNT: "ON_ACCOUNT";
}>;
export type Method = z.infer<typeof Method>;
//# sourceMappingURL=Method.d.ts.map