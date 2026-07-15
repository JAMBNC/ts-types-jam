import { z } from "zod";

/**Terminal outcome of an outbound action executed against the channel (after the mapper exhausts retries).*/
export const ActionResultStatus = z
  .enum(["succeeded", "failed"])
  .describe(
    "Terminal outcome of an outbound action executed against the channel (after the mapper exhausts retries).",
  );
export type ActionResultStatus = z.infer<typeof ActionResultStatus>;
