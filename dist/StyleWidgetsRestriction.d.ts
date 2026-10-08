import { z } from "zod";
declare const _StyleWidgetsRestriction: z.ZodObject<{
    type: z.ZodLiteral<"styleWidgets">;
    value: z.ZodBoolean;
}, z.core.$strict>;
type _StyleWidgetsRestrictionSchema = typeof _StyleWidgetsRestriction;
export interface StyleWidgetsRestrictionSchema extends _StyleWidgetsRestrictionSchema {
}
export declare const StyleWidgetsRestriction: StyleWidgetsRestrictionSchema;
export type StyleWidgetsRestriction = z.infer<typeof StyleWidgetsRestriction>;
export {};
//# sourceMappingURL=StyleWidgetsRestriction.d.ts.map