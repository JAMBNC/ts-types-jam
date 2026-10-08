import { z } from "zod";
declare const _TranslateRestriction: z.ZodObject<{
    type: z.ZodLiteral<"translate">;
    value: z.ZodBoolean;
}, z.core.$strict>;
type _TranslateRestrictionSchema = typeof _TranslateRestriction;
export interface TranslateRestrictionSchema extends _TranslateRestrictionSchema {
}
export declare const TranslateRestriction: TranslateRestrictionSchema;
export type TranslateRestriction = z.infer<typeof TranslateRestriction>;
export {};
//# sourceMappingURL=TranslateRestriction.d.ts.map