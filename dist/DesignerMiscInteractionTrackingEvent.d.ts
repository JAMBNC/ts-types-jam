import { z } from "zod";
export declare const DesignerMiscInteractionTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_misc_interaction">;
    payload: z.ZodObject<{
        name: z.ZodString;
        designer: z.ZodEnum<{
            base: "base";
            hermes: "hermes";
        }>;
        merchant: z.ZodString;
        deltaTime: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerMiscInteractionTrackingEvent = z.infer<typeof DesignerMiscInteractionTrackingEvent>;
//# sourceMappingURL=DesignerMiscInteractionTrackingEvent.d.ts.map