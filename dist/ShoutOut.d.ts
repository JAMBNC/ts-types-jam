import { z } from "zod";
export declare const ShoutOut: z.ZodObject<{
    type: z.ZodEnum<{
        product: "product";
        generic: "generic";
        category: "category";
        group: "group";
        similar: "similar";
    }>;
    display: z.ZodString;
    url: z.ZodString;
    value: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
export type ShoutOut = z.infer<typeof ShoutOut>;
//# sourceMappingURL=ShoutOut.d.ts.map