import { z } from "zod";
declare const _DesignerToolInteractionTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_tool_interaction">;
    payload: z.ZodObject<{
        tool: z.ZodString;
        designer: import("./DesignerCode.js").DesignerCodeSchema;
        merchant: z.ZodAny;
        deltaTime: import("./DeltaTime.js").DeltaTimeSchema;
    }, z.core.$strict>;
}, z.core.$strict>;
type _DesignerToolInteractionTrackingEventSchema = typeof _DesignerToolInteractionTrackingEvent;
export interface DesignerToolInteractionTrackingEventSchema extends _DesignerToolInteractionTrackingEventSchema {
}
export declare const DesignerToolInteractionTrackingEvent: DesignerToolInteractionTrackingEventSchema;
export type DesignerToolInteractionTrackingEvent = z.infer<typeof DesignerToolInteractionTrackingEvent>;
export {};
//# sourceMappingURL=DesignerToolInteractionTrackingEvent.d.ts.map