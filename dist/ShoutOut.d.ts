import { z } from "zod";
export declare const ShoutOut: z.ZodObject<{
    type: z.ZodEnum<{
        category: "category";
        generic: "generic";
        group: "group";
        product: "product";
        similar: "similar";
    }>;
    display: z.ZodString;
    url: z.ZodString;
    value: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
export type ShoutOut = z.infer<typeof ShoutOut>;
//# sourceMappingURL=ShoutOut.d.ts.map