import { z } from "zod";
/**A numeric value with a unit of measurement.*/
export declare const Dimension: z.ZodObject<{
    v: z.ZodNumber;
    u: z.ZodEnum<{
        in: "in";
        mm: "mm";
        px: "px";
        pt: "pt";
    }>;
}, z.core.$strict>;
export type Dimension = z.infer<typeof Dimension>;
//# sourceMappingURL=Dimension.d.ts.map