import { z } from "zod";

const _Type = z.literal("Tag");
type _TypeSchema = typeof _Type;
export interface TypeSchema extends _TypeSchema {}
export const Type: TypeSchema = _Type;
export type Type = z.infer<typeof Type>;
