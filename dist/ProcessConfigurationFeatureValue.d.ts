import { z } from "zod";
export declare const ProcessConfigurationFeatureValue: z.ZodObject<{
    allowBackgroundColor: z.ZodOptional<z.ZodBoolean>;
    allowCustomColors: z.ZodOptional<z.ZodBoolean>;
    available_options: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        text: "text";
        image: "image";
    }>>>;
    colors: z.ZodOptional<z.ZodArray<z.ZodString>>;
    option_use: z.ZodOptional<z.ZodEnum<{
        selected: "selected";
        all: "all";
        none: "none";
    }>>;
    restrictColors: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"processConfigurationFeatureValue">;
}, z.core.$loose>;
export type ProcessConfigurationFeatureValue = z.infer<typeof ProcessConfigurationFeatureValue>;
//# sourceMappingURL=ProcessConfigurationFeatureValue.d.ts.map