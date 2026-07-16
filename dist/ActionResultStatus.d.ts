import { z } from "zod";
/**Terminal outcome of an outbound action executed against the channel (after the mapper exhausts retries).*/
export declare const ActionResultStatus: z.ZodEnum<{
    failed: "failed";
    succeeded: "succeeded";
}>;
export type ActionResultStatus = z.infer<typeof ActionResultStatus>;
//# sourceMappingURL=ActionResultStatus.d.ts.map