import { z } from "zod";
declare const _ZIndexWidgetsRestriction: z.ZodObject<{
    type: z.ZodLiteral<"zIndexWidgets">;
    value: z.ZodBoolean;
}, z.core.$strict>;
type _ZIndexWidgetsRestrictionSchema = typeof _ZIndexWidgetsRestriction;
export interface ZIndexWidgetsRestrictionSchema extends _ZIndexWidgetsRestrictionSchema {
}
export declare const ZIndexWidgetsRestriction: ZIndexWidgetsRestrictionSchema;
export type ZIndexWidgetsRestriction = z.infer<typeof ZIndexWidgetsRestriction>;
export {};
//# sourceMappingURL=ZIndexWidgetsRestriction.d.ts.map