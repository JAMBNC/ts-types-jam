import { z } from "zod";

const _CoatingAdderCode = z.enum([
  "lamination_gloss",
  "lamination_matte",
  "lamination_sunscreen",
  "lamination_soft_touch",
  "aqueous_side1_gloss",
  "aqueous_side1_satin",
  "aqueous_side1_matte",
  "aqueous_side1_soft_touch",
  "aqueous_side2_gloss",
  "aqueous_side2_satin",
  "aqueous_side2_matte",
  "aqueous_side2_soft_touch",
  "uv_side1_gloss",
  "uv_side1_matte",
  "uv_side2_matte",
  "uv_side2_gloss",
]);
type _CoatingAdderCodeSchema = typeof _CoatingAdderCode;
export interface CoatingAdderCodeSchema extends _CoatingAdderCodeSchema {}
export const CoatingAdderCode: CoatingAdderCodeSchema = _CoatingAdderCode;
export type CoatingAdderCode = z.infer<typeof CoatingAdderCode>;
