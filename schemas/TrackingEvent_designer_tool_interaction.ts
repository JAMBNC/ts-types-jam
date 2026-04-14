import { z } from "zod";

export const TrackingEvent_designer_tool_interaction = z
  .object({
    event: z.literal("designer_tool_interaction"),
    payload: z.object({ tool: z.string() }).strict(),
  })
  .strict();
export type TrackingEvent_designer_tool_interaction = z.infer<
  typeof TrackingEvent_designer_tool_interaction
>;
