import { z } from "zod";
declare const _DesignerMiscInteractionTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_misc_interaction">;
    payload: z.ZodObject<{
        name: z.ZodString;
        designer: import("./DesignerCode.js").DesignerCodeSchema;
        partner: z.ZodString;
        channel: z.ZodString;
        deltaTime: import("./DeltaTime.js").DeltaTimeSchema;
    }, z.core.$strict>;
}, z.core.$strict>;
type _DesignerMiscInteractionTrackingEventSchema = typeof _DesignerMiscInteractionTrackingEvent;
export interface DesignerMiscInteractionTrackingEventSchema extends _DesignerMiscInteractionTrackingEventSchema {
}
export declare const DesignerMiscInteractionTrackingEvent: DesignerMiscInteractionTrackingEventSchema;
export type DesignerMiscInteractionTrackingEvent = z.infer<typeof DesignerMiscInteractionTrackingEvent>;
export {};
//# sourceMappingURL=DesignerMiscInteractionTrackingEvent.d.ts.map