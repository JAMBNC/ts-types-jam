import { z } from "zod";
export declare const DesignerDesignStartedTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_design_started">;
    payload: z.ZodRecord<z.ZodString, z.ZodNever>;
}, z.core.$strict>;
export type DesignerDesignStartedTrackingEvent = z.infer<typeof DesignerDesignStartedTrackingEvent>;
//# sourceMappingURL=DesignerDesignStartedTrackingEvent.d.ts.map