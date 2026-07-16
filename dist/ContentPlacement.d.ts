import { z } from "zod";
export declare const ContentPlacement: z.ZodObject<{
    type: z.ZodOptional<z.ZodString>;
    side: z.ZodOptional<z.ZodString>;
    x: z.ZodOptional<z.ZodString>;
    xType: z.ZodOptional<z.ZodEnum<{
        absolute: "absolute";
        relative: "relative";
    }>>;
    y: z.ZodOptional<z.ZodString>;
    yType: z.ZodOptional<z.ZodEnum<{
        absolute: "absolute";
        relative: "relative";
    }>>;
}, z.core.$loose>;
export type ContentPlacement = z.infer<typeof ContentPlacement>;
//# sourceMappingURL=ContentPlacement.d.ts.map