import { z } from "zod";
declare const _SelectRestriction: z.ZodObject<{
    type: z.ZodLiteral<"select">;
    value: z.ZodBoolean;
}, z.core.$strict>;
type _SelectRestrictionSchema = typeof _SelectRestriction;
export interface SelectRestrictionSchema extends _SelectRestrictionSchema {
}
export declare const SelectRestriction: SelectRestrictionSchema;
export type SelectRestriction = z.infer<typeof SelectRestriction>;
export {};
//# sourceMappingURL=SelectRestriction.d.ts.map