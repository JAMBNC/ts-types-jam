import { z } from "zod";
declare const _DeleteRestriction: z.ZodObject<{
    type: z.ZodLiteral<"delete">;
    value: z.ZodBoolean;
}, z.core.$strict>;
type _DeleteRestrictionSchema = typeof _DeleteRestriction;
export interface DeleteRestrictionSchema extends _DeleteRestrictionSchema {
}
export declare const DeleteRestriction: DeleteRestrictionSchema;
export type DeleteRestriction = z.infer<typeof DeleteRestriction>;
export {};
//# sourceMappingURL=DeleteRestriction.d.ts.map