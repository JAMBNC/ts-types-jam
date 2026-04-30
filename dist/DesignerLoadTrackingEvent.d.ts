import { z } from "zod";
export declare const DesignerLoadTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_load">;
    payload: z.ZodIntersection<z.ZodObject<{
        loadTime: z.ZodNumber;
        productUrl: z.ZodOptional<z.ZodString>;
    }, z.core.$loose>, z.ZodObject<{
        designer: z.ZodEnum<{
            base: "base";
            hermes: "hermes";
        }>;
        merchant: z.ZodString;
        deltaTime: z.ZodNumber;
    }, z.core.$loose>>;
}, z.core.$strict>;
export type DesignerLoadTrackingEvent = z.infer<typeof DesignerLoadTrackingEvent>;
//# sourceMappingURL=DesignerLoadTrackingEvent.d.ts.map