import { z } from "zod";
export declare const DesignerAddReturnAddressTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_add_return_address">;
    payload: z.ZodRecord<z.ZodString, z.ZodNever>;
}, z.core.$strict>;
export type DesignerAddReturnAddressTrackingEvent = z.infer<typeof DesignerAddReturnAddressTrackingEvent>;
//# sourceMappingURL=DesignerAddReturnAddressTrackingEvent.d.ts.map