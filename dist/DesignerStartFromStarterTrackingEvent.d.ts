import { z } from "zod";
declare const _DesignerStartFromStarterTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_start_from_starter">;
    payload: z.ZodObject<{
        starterId: z.ZodNumber;
        sku: z.ZodString;
        designer: import("./DesignerCode.js").DesignerCodeSchema;
        partner: z.ZodString;
        channel: z.ZodString;
        deltaTime: import("./DeltaTime.js").DeltaTimeSchema;
        workspaceSessionTags: z.ZodArray<import("./WorkspaceTag.js").WorkspaceTagSchema>;
    }, z.core.$strict>;
}, z.core.$strict>;
type _DesignerStartFromStarterTrackingEventSchema = typeof _DesignerStartFromStarterTrackingEvent;
export interface DesignerStartFromStarterTrackingEventSchema extends _DesignerStartFromStarterTrackingEventSchema {
}
export declare const DesignerStartFromStarterTrackingEvent: DesignerStartFromStarterTrackingEventSchema;
export type DesignerStartFromStarterTrackingEvent = z.infer<typeof DesignerStartFromStarterTrackingEvent>;
export {};
//# sourceMappingURL=DesignerStartFromStarterTrackingEvent.d.ts.map