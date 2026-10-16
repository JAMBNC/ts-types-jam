import { z } from "zod";

const _DerivedFromKind = z.enum(["style", "prebuilt", "design"]);
type _DerivedFromKindSchema = typeof _DerivedFromKind;
export interface DerivedFromKindSchema extends _DerivedFromKindSchema {}
export const DerivedFromKind: DerivedFromKindSchema = _DerivedFromKind;
export type DerivedFromKind = z.infer<typeof DerivedFromKind>;
