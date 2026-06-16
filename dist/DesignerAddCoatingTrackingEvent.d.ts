import { z } from "zod";
export declare const DesignerAddCoatingTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_add_coating">;
    payload: z.ZodObject<{
        designer: z.ZodEnum<{
            base: "base";
            hermes: "hermes";
        }>;
        merchant: z.ZodString;
        deltaTime: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerAddCoatingTrackingEvent = z.infer<typeof DesignerAddCoatingTrackingEvent>;
//# sourceMappingURL=DesignerAddCoatingTrackingEvent.d.ts.map