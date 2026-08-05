import { z } from "zod";

const _ActionError = z
  .object({
    field: z.union([z.array(z.string()), z.null()]).optional(),
    message: z.string(),
  })
  .strict()
  .describe(
    "A channel-reported error or a transport error captured when an action failed.",
  );
type _ActionErrorSchema = typeof _ActionError;
export interface ActionErrorSchema extends _ActionErrorSchema {}
/**A channel-reported error or a transport error captured when an action failed.*/
export const ActionError: ActionErrorSchema = _ActionError;
export type ActionError = z.infer<typeof ActionError>;
