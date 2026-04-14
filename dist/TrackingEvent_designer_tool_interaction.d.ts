import { z } from "zod";
export declare const TrackingEvent_designer_tool_interaction: z.ZodObject<{
    event: z.ZodLiteral<"designer_tool_interaction">;
    payload: z.ZodObject<{
        tool: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strict>;
export type TrackingEvent_designer_tool_interaction = z.infer<typeof TrackingEvent_designer_tool_interaction>;
//# sourceMappingURL=TrackingEvent_designer_tool_interaction.d.ts.map