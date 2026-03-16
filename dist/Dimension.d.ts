import { z } from "zod";
export declare const Dimension: z.ZodObject<{
    unit: z.ZodEnum<{
        in: "in";
        mm: "mm";
        px: "px";
        pt: "pt";
    }>;
    value: z.ZodNumber;
}, z.core.$loose>;
export type Dimension = z.infer<typeof Dimension>;
//# sourceMappingURL=Dimension.d.ts.map