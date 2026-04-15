import { z } from "zod";
export const DesignerDesignSavedTrackingEvent = z
    .object({
    event: z.literal("designer_design_saved"),
    payload: z
        .object({
        designId: z.string(),
        snapshots: z.array(z.object({ url: z.string().url(), label: z.string() }).strict()),
    })
        .strict(),
})
    .strict();
