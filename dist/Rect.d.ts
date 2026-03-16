import { z } from "zod";
/**A positioned rectangle defined by x, y, width, and height measurements.*/
export declare const Rect: z.ZodObject<{
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
    width: z.ZodObject<{
        unit: z.ZodEnum<{
            in: "in";
            mm: "mm";
            px: "px";
            pt: "pt";
        }>;
        value: z.ZodNumber;
    }, z.core.$loose>;
    height: z.ZodObject<{
        unit: z.ZodEnum<{
            in: "in";
            mm: "mm";
            px: "px";
            pt: "pt";
        }>;
        value: z.ZodNumber;
    }, z.core.$loose>;
}, z.core.$strict>;
export type Rect = z.infer<typeof Rect>;
//# sourceMappingURL=Rect.d.ts.map