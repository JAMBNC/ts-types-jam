import { z } from "zod";
declare const _ZIndexRestriction: z.ZodObject<{
    type: z.ZodLiteral<"zIndex">;
    value: z.ZodEnum<{
        bottom: "bottom";
        top: "top";
    }>;
}, z.core.$strict>;
type _ZIndexRestrictionSchema = typeof _ZIndexRestriction;
export interface ZIndexRestrictionSchema extends _ZIndexRestrictionSchema {
}
export declare const ZIndexRestriction: ZIndexRestrictionSchema;
export type ZIndexRestriction = z.infer<typeof ZIndexRestriction>;
export {};
//# sourceMappingURL=ZIndexRestriction.d.ts.map