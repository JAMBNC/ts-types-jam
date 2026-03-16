import { z } from "zod";
/**A straight line control point with in-handle, out-handle, and anchor position.*/
export declare const LinePoint: z.ZodObject<{
    type: z.ZodLiteral<"line">;
    ix: z.ZodObject<{
        unit: z.ZodEnum<{
            in: "in";
            mm: "mm";
            px: "px";
            pt: "pt";
        }>;
        value: z.ZodNumber;
    }, z.core.$loose>;
    iy: z.ZodObject<{
        unit: z.ZodEnum<{
            in: "in";
            mm: "mm";
            px: "px";
            pt: "pt";
        }>;
        value: z.ZodNumber;
    }, z.core.$loose>;
    ox: z.ZodObject<{
        unit: z.ZodEnum<{
            in: "in";
            mm: "mm";
            px: "px";
            pt: "pt";
        }>;
        value: z.ZodNumber;
    }, z.core.$loose>;
    oy: z.ZodObject<{
        unit: z.ZodEnum<{
            in: "in";
            mm: "mm";
            px: "px";
            pt: "pt";
        }>;
        value: z.ZodNumber;
    }, z.core.$loose>;
    x: z.ZodObject<{
        unit: z.ZodEnum<{
            in: "in";
            mm: "mm";
            px: "px";
            pt: "pt";
        }>;
        value: z.ZodNumber;
    }, z.core.$loose>;
    y: z.ZodObject<{
        unit: z.ZodEnum<{
            in: "in";
            mm: "mm";
            px: "px";
            pt: "pt";
        }>;
        value: z.ZodNumber;
    }, z.core.$loose>;
}, z.core.$strict>;
export type LinePoint = z.infer<typeof LinePoint>;
//# sourceMappingURL=LinePoint.d.ts.map