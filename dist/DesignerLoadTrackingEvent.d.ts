import { z } from "zod";
export declare const DesignerLoadTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_load">;
    payload: z.ZodObject<{
        loadTime: z.ZodNumber;
        designer: z.ZodEnum<{
            base: "base";
            hermes: "hermes";
        }>;
        productUrl: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerLoadTrackingEvent = z.infer<typeof DesignerLoadTrackingEvent>;
//# sourceMappingURL=DesignerLoadTrackingEvent.d.ts.map