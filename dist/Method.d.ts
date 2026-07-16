import { z } from "zod";
export declare const Method: z.ZodEnum<{
    CASH: "CASH";
    CREDIT_CARD: "CREDIT_CARD";
    ON_ACCOUNT: "ON_ACCOUNT";
    PO: "PO";
}>;
export type Method = z.infer<typeof Method>;
//# sourceMappingURL=Method.d.ts.map