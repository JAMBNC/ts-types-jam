import { z } from "zod/v4";
export declare const ShoutOut: z.ZodObject<{
    display: z.ZodString;
    displayGroupId: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        generic: "generic";
        product: "product";
        category: "category";
        group: "group";
        similar: "similar";
    }>;
    url: z.ZodString;
}, z.core.$strip>;
export type ShoutOut = z.infer<typeof ShoutOut>;
//# sourceMappingURL=ShoutOut.d.ts.map