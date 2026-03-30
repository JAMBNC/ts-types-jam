import { z } from "zod";
export declare const Dimension: z.ZodObject<{
    u: z.ZodEnum<{
        in: "in";
        mm: "mm";
        px: "px";
        pt: "pt";
    }>;
    v: z.ZodNumber;
}, z.core.$loose>;
export type Dimension = z.infer<typeof Dimension>;
//# sourceMappingURL=Dimension.d.ts.map