import { z } from "zod";
declare const _DesignerErrorTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_error">;
    payload: z.ZodObject<{
        type: z.ZodString;
        designUuid: z.ZodString;
        designer: import("./DesignerCode.js").DesignerCodeSchema;
        partner: z.ZodString;
        channel: z.ZodString;
        deltaTime: import("./DeltaTime.js").DeltaTimeSchema;
        workspaceSessionTags: z.ZodArray<z.ZodArray<import("./WorkspaceTag.js").WorkspaceTagSchema>>;
    }, z.core.$strict>;
}, z.core.$strict>;
type _DesignerErrorTrackingEventSchema = typeof _DesignerErrorTrackingEvent;
export interface DesignerErrorTrackingEventSchema extends _DesignerErrorTrackingEventSchema {
}
export declare const DesignerErrorTrackingEvent: DesignerErrorTrackingEventSchema;
export type DesignerErrorTrackingEvent = z.infer<typeof DesignerErrorTrackingEvent>;
export {};
//# sourceMappingURL=DesignerErrorTrackingEvent.d.ts.map