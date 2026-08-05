import { z } from "zod";

export const CoatingAdderCode = z.enum([
  "lamination_gloss",
  "lamination_matte",
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
export type CoatingAdderCode = z.infer<typeof CoatingAdderCode>;
