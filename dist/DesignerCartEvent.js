import { z } from "zod";
const _DesignerCartEvent = z
    .object({ type: z.literal("cart"), payload: z.record(z.string(), z.never()) })
    .strict()
    .describe("Event emitted when the user requests redirection to cart");
/**Event emitted when the user requests redirection to cart*/
export const DesignerCartEvent = _DesignerCartEvent;
