import { z } from "zod";
/**Event emitted when the user requests redirection to cart*/
export const DesignerCartEvent = z
    .object({ type: z.literal("cart"), payload: z.record(z.string(), z.never()) })
    .strict()
    .describe("Event emitted when the user requests redirection to cart");
