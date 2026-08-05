import { z } from "zod";

const _Alignment = z.enum(["left", "center", "right"]);
type _AlignmentSchema = typeof _Alignment;
export interface AlignmentSchema extends _AlignmentSchema {}
export const Alignment: AlignmentSchema = _Alignment;
export type Alignment = z.infer<typeof Alignment>;
