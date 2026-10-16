import { z } from "zod";
declare const _DerivedFromKind: z.ZodEnum<{
    design: "design";
    prebuilt: "prebuilt";
    style: "style";
}>;
type _DerivedFromKindSchema = typeof _DerivedFromKind;
export interface DerivedFromKindSchema extends _DerivedFromKindSchema {
}
export declare const DerivedFromKind: DerivedFromKindSchema;
export type DerivedFromKind = z.infer<typeof DerivedFromKind>;
export {};
//# sourceMappingURL=DerivedFromKind.d.ts.map