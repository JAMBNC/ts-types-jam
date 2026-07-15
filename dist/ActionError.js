import { z } from "zod";
/**A channel-reported error or a transport error captured when an action failed.*/
export const ActionError = z
    .object({
    field: z.union([z.array(z.string()), z.null()]).optional(),
    message: z.string(),
})
    .strict()
    .describe("A channel-reported error or a transport error captured when an action failed.");
