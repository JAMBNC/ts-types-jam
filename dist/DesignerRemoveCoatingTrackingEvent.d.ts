import { z } from "zod";
export declare const DesignerRemoveCoatingTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_remove_coating">;
    payload: z.ZodObject<{
        designer: z.ZodEnum<{
            base: "base";
            hermes: "hermes";
        }>;
        merchant: z.ZodString;
        deltaTime: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerRemoveCoatingTrackingEvent = z.infer<typeof DesignerRemoveCoatingTrackingEvent>;
//# sourceMappingURL=DesignerRemoveCoatingTrackingEvent.d.ts.map