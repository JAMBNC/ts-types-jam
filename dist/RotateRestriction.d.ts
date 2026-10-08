import { z } from "zod";
declare const _RotateRestriction: z.ZodObject<{
    type: z.ZodLiteral<"rotate">;
    value: z.ZodBoolean;
}, z.core.$strict>;
type _RotateRestrictionSchema = typeof _RotateRestriction;
export interface RotateRestrictionSchema extends _RotateRestrictionSchema {
}
export declare const RotateRestriction: RotateRestrictionSchema;
export type RotateRestriction = z.infer<typeof RotateRestriction>;
export {};
//# sourceMappingURL=RotateRestriction.d.ts.map