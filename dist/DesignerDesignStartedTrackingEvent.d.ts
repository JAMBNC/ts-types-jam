import { z } from "zod";
declare const _DesignerDesignStartedTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_design_started">;
    payload: import("./DefaultTrackingPayload.js").DefaultTrackingPayloadSchema;
}, z.core.$strict>;
type _DesignerDesignStartedTrackingEventSchema = typeof _DesignerDesignStartedTrackingEvent;
export interface DesignerDesignStartedTrackingEventSchema extends _DesignerDesignStartedTrackingEventSchema {
}
export declare const DesignerDesignStartedTrackingEvent: DesignerDesignStartedTrackingEventSchema;
export type DesignerDesignStartedTrackingEvent = z.infer<typeof DesignerDesignStartedTrackingEvent>;
export {};
//# sourceMappingURL=DesignerDesignStartedTrackingEvent.d.ts.map