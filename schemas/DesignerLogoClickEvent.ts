import { z } from "zod";

const _DesignerLogoClickEvent = z
  .object({
    type: z.literal("logoClick"),
    payload: z.record(z.string(), z.never()),
  })
  .strict()
  .describe("Event emitted when the user clicks the logo.");
type _DesignerLogoClickEventSchema = typeof _DesignerLogoClickEvent;
export interface DesignerLogoClickEventSchema extends _DesignerLogoClickEventSchema {}
/**Event emitted when the user clicks the logo.*/
export const DesignerLogoClickEvent: DesignerLogoClickEventSchema =
  _DesignerLogoClickEvent;
export type DesignerLogoClickEvent = z.infer<typeof DesignerLogoClickEvent>;
