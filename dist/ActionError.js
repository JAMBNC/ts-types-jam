import { z } from "zod";
const _ActionError = z
    .object({
    field: z.union([z.array(z.string()), z.null()]).optional(),
    message: z.string(),
})
    .strict()
    .describe("A channel-reported error or a transport error captured when an action failed.");
/**A channel-reported error or a transport error captured when an action failed.*/
export const ActionError = _ActionError;
