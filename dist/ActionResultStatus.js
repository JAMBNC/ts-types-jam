import { z } from "zod";
const _ActionResultStatus = z
    .enum(["succeeded", "failed"])
    .describe("Terminal outcome of an outbound action executed against the channel (after the mapper exhausts retries).");
/**Terminal outcome of an outbound action executed against the channel (after the mapper exhausts retries).*/
export const ActionResultStatus = _ActionResultStatus;
