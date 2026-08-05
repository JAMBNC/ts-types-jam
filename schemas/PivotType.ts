import { z } from "zod";

const _PivotType = z.enum(["primary", "secondary"]);
type _PivotTypeSchema = typeof _PivotType;
export interface PivotTypeSchema extends _PivotTypeSchema {}
export const PivotType: PivotTypeSchema = _PivotType;
export type PivotType = z.infer<typeof PivotType>;
