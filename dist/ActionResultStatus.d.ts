import { z } from "zod";
declare const _ActionResultStatus: z.ZodEnum<{
    failed: "failed";
    succeeded: "succeeded";
}>;
type _ActionResultStatusSchema = typeof _ActionResultStatus;
export interface ActionResultStatusSchema extends _ActionResultStatusSchema {
}
/**Terminal outcome of an outbound action executed against the channel (after the mapper exhausts retries).*/
export declare const ActionResultStatus: ActionResultStatusSchema;
export type ActionResultStatus = z.infer<typeof ActionResultStatus>;
export {};
//# sourceMappingURL=ActionResultStatus.d.ts.map