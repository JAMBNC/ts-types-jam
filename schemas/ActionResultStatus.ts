import { z } from "zod";

const _ActionResultStatus = z
  .enum(["succeeded", "failed"])
  .describe(
    "Terminal outcome of an outbound action executed against the channel (after the mapper exhausts retries).",
  );
type _ActionResultStatusSchema = typeof _ActionResultStatus;
export interface ActionResultStatusSchema extends _ActionResultStatusSchema {}
/**Terminal outcome of an outbound action executed against the channel (after the mapper exhausts retries).*/
export const ActionResultStatus: ActionResultStatusSchema = _ActionResultStatus;
export type ActionResultStatus = z.infer<typeof ActionResultStatus>;
