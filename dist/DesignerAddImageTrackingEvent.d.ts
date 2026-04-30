import { z } from "zod";
export declare const DesignerAddImageTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_add_image">;
    payload: z.ZodObject<{
        designer: z.ZodEnum<{
            base: "base";
            hermes: "hermes";
        }>;
        merchant: z.ZodString;
        deltaTime: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerAddImageTrackingEvent = z.infer<typeof DesignerAddImageTrackingEvent>;
//# sourceMappingURL=DesignerAddImageTrackingEvent.d.ts.map