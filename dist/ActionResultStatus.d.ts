import { z } from "zod";
/**Terminal outcome of an outbound action executed against the channel (after the mapper exhausts retries).*/
export declare const ActionResultStatus: z.ZodEnum<{
    succeeded: "succeeded";
    failed: "failed";
}>;
export type ActionResultStatus = z.infer<typeof ActionResultStatus>;
//# sourceMappingURL=ActionResultStatus.d.ts.map