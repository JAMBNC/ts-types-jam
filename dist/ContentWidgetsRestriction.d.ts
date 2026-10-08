import { z } from "zod";
declare const _ContentWidgetsRestriction: z.ZodObject<{
    type: z.ZodLiteral<"contentWidgets">;
    value: z.ZodBoolean;
}, z.core.$strict>;
type _ContentWidgetsRestrictionSchema = typeof _ContentWidgetsRestriction;
export interface ContentWidgetsRestrictionSchema extends _ContentWidgetsRestrictionSchema {
}
export declare const ContentWidgetsRestriction: ContentWidgetsRestrictionSchema;
export type ContentWidgetsRestriction = z.infer<typeof ContentWidgetsRestriction>;
export {};
//# sourceMappingURL=ContentWidgetsRestriction.d.ts.map