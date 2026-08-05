import { z } from "zod";
declare const _ActionError: z.ZodObject<{
    field: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodNull]>>;
    message: z.ZodString;
}, z.core.$strict>;
type _ActionErrorSchema = typeof _ActionError;
export interface ActionErrorSchema extends _ActionErrorSchema {
}
/**A channel-reported error or a transport error captured when an action failed.*/
export declare const ActionError: ActionErrorSchema;
export type ActionError = z.infer<typeof ActionError>;
export {};
//# sourceMappingURL=ActionError.d.ts.map