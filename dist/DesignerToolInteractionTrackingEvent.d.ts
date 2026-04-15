import { z } from "zod";
export declare const DesignerToolInteractionTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_tool_interaction">;
    payload: z.ZodObject<{
        tool: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerToolInteractionTrackingEvent = z.infer<typeof DesignerToolInteractionTrackingEvent>;
//# sourceMappingURL=DesignerToolInteractionTrackingEvent.d.ts.map