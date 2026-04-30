import { z } from "zod";
export declare const DesignerLoadTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_load">;
    payload: z.ZodObject<{
        loadTime: z.ZodNumber;
        productUrl: z.ZodOptional<z.ZodString>;
        designer: z.ZodEnum<{
            base: "base";
            hermes: "hermes";
        }>;
        merchant: z.ZodString;
        deltaTime: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerLoadTrackingEvent = z.infer<typeof DesignerLoadTrackingEvent>;
//# sourceMappingURL=DesignerLoadTrackingEvent.d.ts.map