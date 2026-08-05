import { z } from "zod";

const _OptionUse = z.enum(["none", "selected", "all"]);
type _OptionUseSchema = typeof _OptionUse;
export interface OptionUseSchema extends _OptionUseSchema {}
export const OptionUse: OptionUseSchema = _OptionUse;
export type OptionUse = z.infer<typeof OptionUse>;
