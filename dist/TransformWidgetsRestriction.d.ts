import { z } from "zod";
declare const _TransformWidgetsRestriction: z.ZodObject<{
    type: z.ZodLiteral<"transformWidgets">;
    value: z.ZodBoolean;
}, z.core.$strict>;
type _TransformWidgetsRestrictionSchema = typeof _TransformWidgetsRestriction;
export interface TransformWidgetsRestrictionSchema extends _TransformWidgetsRestrictionSchema {
}
export declare const TransformWidgetsRestriction: TransformWidgetsRestrictionSchema;
export type TransformWidgetsRestriction = z.infer<typeof TransformWidgetsRestriction>;
export {};
//# sourceMappingURL=TransformWidgetsRestriction.d.ts.map