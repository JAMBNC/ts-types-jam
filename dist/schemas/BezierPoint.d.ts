import { z } from "zod";
/**A bezier curve control point with in-handle, out-handle, and anchor position.*/
export declare const BezierPoint: z.ZodObject<{
    type: z.ZodLiteral<"bezier">;
    ix: z.ZodObject<{
        u: z.ZodEnum<{
            in: "in";
            mm: "mm";
            px: "px";
            pt: "pt";
        }>;
        v: z.ZodNumber;
    }, z.core.$loose>;
    iy: z.ZodObject<{
        u: z.ZodEnum<{
            in: "in";
            mm: "mm";
            px: "px";
            pt: "pt";
        }>;
        v: z.ZodNumber;
    }, z.core.$loose>;
    ox: z.ZodObject<{
        u: z.ZodEnum<{
            in: "in";
            mm: "mm";
            px: "px";
            pt: "pt";
        }>;
        v: z.ZodNumber;
    }, z.core.$loose>;
    oy: z.ZodObject<{
        u: z.ZodEnum<{
            in: "in";
            mm: "mm";
            px: "px";
            pt: "pt";
        }>;
        v: z.ZodNumber;
    }, z.core.$loose>;
    x: z.ZodObject<{
        u: z.ZodEnum<{
            in: "in";
            mm: "mm";
            px: "px";
            pt: "pt";
        }>;
        v: z.ZodNumber;
    }, z.core.$loose>;
    y: z.ZodObject<{
        u: z.ZodEnum<{
            in: "in";
            mm: "mm";
            px: "px";
            pt: "pt";
        }>;
        v: z.ZodNumber;
    }, z.core.$loose>;
}, z.core.$strict>;
export type BezierPoint = z.infer<typeof BezierPoint>;
//# sourceMappingURL=BezierPoint.d.ts.map