import { z } from "zod";

const _DesignerCartEvent = z
  .object({ type: z.literal("cart"), payload: z.record(z.string(), z.never()) })
  .strict()
  .describe("Event emitted when the user requests redirection to cart");
type _DesignerCartEventSchema = typeof _DesignerCartEvent;
export interface DesignerCartEventSchema extends _DesignerCartEventSchema {}
/**Event emitted when the user requests redirection to cart*/
export const DesignerCartEvent: DesignerCartEventSchema = _DesignerCartEvent;
export type DesignerCartEvent = z.infer<typeof DesignerCartEvent>;
