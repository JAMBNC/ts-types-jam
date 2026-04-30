import { z } from "zod";
export declare const DesignerAddTextTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_add_text">;
    payload: z.ZodObject<{
        designer: z.ZodEnum<{
            base: "base";
            hermes: "hermes";
        }>;
        merchant: z.ZodString;
        deltaTime: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerAddTextTrackingEvent = z.infer<typeof DesignerAddTextTrackingEvent>;
//# sourceMappingURL=DesignerAddTextTrackingEvent.d.ts.map