import { z } from "zod";
export declare const DesignerAddReturnAddressTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_add_return_address">;
    payload: z.ZodObject<{
        designer: z.ZodEnum<{
            base: "base";
            hermes: "hermes";
        }>;
        merchant: z.ZodString;
        deltaTime: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerAddReturnAddressTrackingEvent = z.infer<typeof DesignerAddReturnAddressTrackingEvent>;
//# sourceMappingURL=DesignerAddReturnAddressTrackingEvent.d.ts.map