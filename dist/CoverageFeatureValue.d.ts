import { z } from "zod";
export declare const CoverageFeatureValue: z.ZodObject<{
    availableOptions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodLiteral<"coverageAdderCodeEnum">;
    }, z.core.$loose>>>;
    coverageMap: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        unit: z.ZodEnum<{
            in: "in";
            mm: "mm";
            px: "px";
            pt: "pt";
        }>;
        value: z.ZodNumber;
    }, z.core.$loose>>>;
    optionUse: z.ZodOptional<z.ZodEnum<{
        selected: "selected";
        none: "none";
        all: "all";
    }>>;
    type: z.ZodLiteral<"coverageFeatureValue">;
}, z.core.$loose>;
export type CoverageFeatureValue = z.infer<typeof CoverageFeatureValue>;
//# sourceMappingURL=CoverageFeatureValue.d.ts.map