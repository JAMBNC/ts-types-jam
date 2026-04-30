import { z } from "zod";
export declare const DesignerDesignStartedTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_design_started">;
    payload: z.ZodObject<{
        designer: z.ZodEnum<{
            base: "base";
            hermes: "hermes";
        }>;
        merchant: z.ZodString;
        deltaTime: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerDesignStartedTrackingEvent = z.infer<typeof DesignerDesignStartedTrackingEvent>;
//# sourceMappingURL=DesignerDesignStartedTrackingEvent.d.ts.map