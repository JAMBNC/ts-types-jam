import { z } from "zod";

const _PositionType = z.enum(["relative", "absolute"]);
type _PositionTypeSchema = typeof _PositionType;
export interface PositionTypeSchema extends _PositionTypeSchema {}
export const PositionType: PositionTypeSchema = _PositionType;
export type PositionType = z.infer<typeof PositionType>;
