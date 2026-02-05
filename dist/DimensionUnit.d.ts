import { z } from "zod";
/**The unit of measurement for dimensions.*/
export declare const DimensionUnit: z.ZodEnum<{
    in: "in";
    mm: "mm";
    px: "px";
    pt: "pt";
}>;
export type DimensionUnit = z.infer<typeof DimensionUnit>;
//# sourceMappingURL=DimensionUnit.d.ts.map