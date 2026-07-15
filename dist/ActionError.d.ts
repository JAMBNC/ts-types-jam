import { z } from "zod";
/**A channel-reported error or a transport error captured when an action failed.*/
export declare const ActionError: z.ZodObject<{
    field: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodNull]>>;
    message: z.ZodString;
}, z.core.$strict>;
export type ActionError = z.infer<typeof ActionError>;
//# sourceMappingURL=ActionError.d.ts.map