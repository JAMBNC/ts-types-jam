import { z } from "zod";
declare const _CoatingAdderCode: z.ZodEnum<{
    aqueous_side1_gloss: "aqueous_side1_gloss";
    aqueous_side1_matte: "aqueous_side1_matte";
    aqueous_side1_satin: "aqueous_side1_satin";
    aqueous_side1_soft_touch: "aqueous_side1_soft_touch";
    aqueous_side2_gloss: "aqueous_side2_gloss";
    aqueous_side2_matte: "aqueous_side2_matte";
    aqueous_side2_satin: "aqueous_side2_satin";
    aqueous_side2_soft_touch: "aqueous_side2_soft_touch";
    lamination_gloss: "lamination_gloss";
    lamination_matte: "lamination_matte";
    lamination_soft_touch: "lamination_soft_touch";
    lamination_sunscreen: "lamination_sunscreen";
    uv_side1_gloss: "uv_side1_gloss";
    uv_side1_matte: "uv_side1_matte";
    uv_side2_gloss: "uv_side2_gloss";
    uv_side2_matte: "uv_side2_matte";
}>;
type _CoatingAdderCodeSchema = typeof _CoatingAdderCode;
export interface CoatingAdderCodeSchema extends _CoatingAdderCodeSchema {
}
export declare const CoatingAdderCode: CoatingAdderCodeSchema;
export type CoatingAdderCode = z.infer<typeof CoatingAdderCode>;
export {};
//# sourceMappingURL=CoatingAdderCode.d.ts.map