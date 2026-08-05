import { z } from "zod";

const _DesignerLoginEvent = z
  .object({
    type: z.literal("login"),
    payload: z.record(z.string(), z.never()),
  })
  .strict()
  .describe("Event emitted when the user requests a login.");
type _DesignerLoginEventSchema = typeof _DesignerLoginEvent;
export interface DesignerLoginEventSchema extends _DesignerLoginEventSchema {}
/**Event emitted when the user requests a login.*/
export const DesignerLoginEvent: DesignerLoginEventSchema = _DesignerLoginEvent;
export type DesignerLoginEvent = z.infer<typeof DesignerLoginEvent>;
