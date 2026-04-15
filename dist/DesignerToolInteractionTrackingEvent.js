import { z } from "zod";
export const DesignerToolInteractionTrackingEvent = z
    .object({
    event: z.literal("designer_tool_interaction"),
    payload: z.object({ tool: z.string() }).strict(),
})
    .strict();
