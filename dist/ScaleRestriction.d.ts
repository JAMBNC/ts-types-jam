import { z } from "zod";
declare const _ScaleRestriction: z.ZodObject<{
    type: z.ZodLiteral<"scale">;
    value: z.ZodBoolean;
}, z.core.$strict>;
type _ScaleRestrictionSchema = typeof _ScaleRestriction;
export interface ScaleRestrictionSchema extends _ScaleRestrictionSchema {
}
export declare const ScaleRestriction: ScaleRestrictionSchema;
export type ScaleRestriction = z.infer<typeof ScaleRestriction>;
export {};
//# sourceMappingURL=ScaleRestriction.d.ts.map