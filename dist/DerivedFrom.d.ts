import { z } from "zod";
declare const _DerivedFrom: z.ZodObject<{
    kind: import("./DerivedFromKind.js").DerivedFromKindSchema;
    id: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
type _DerivedFromSchema = typeof _DerivedFrom;
export interface DerivedFromSchema extends _DerivedFromSchema {
}
/**What a design was derived from, stamped at instantiate/clone/transpose time. Structured rather than a display string, because reconciliation has to locate the source to fetch its current hash.*/
export declare const DerivedFrom: DerivedFromSchema;
export type DerivedFrom = z.infer<typeof DerivedFrom>;
export {};
//# sourceMappingURL=DerivedFrom.d.ts.map