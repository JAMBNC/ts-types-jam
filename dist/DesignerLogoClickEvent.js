import { z } from "zod";
const _DesignerLogoClickEvent = z
    .object({
    type: z.literal("logoClick"),
    payload: z.record(z.string(), z.never()),
})
    .strict()
    .describe("Event emitted when the user clicks the logo.");
/**Event emitted when the user clicks the logo.*/
export const DesignerLogoClickEvent = _DesignerLogoClickEvent;
