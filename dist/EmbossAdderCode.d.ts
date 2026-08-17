import { z } from "zod";
declare const _EmbossAdderCode: z.ZodEnum<{
    emboss1_bev: "emboss1_bev";
    emboss1_burnish: "emboss1_burnish";
    emboss1_mag: "emboss1_mag";
    emboss1_round: "emboss1_round";
    emboss1_sculpt: "emboss1_sculpt";
    emboss2_bev: "emboss2_bev";
    emboss2_burnish: "emboss2_burnish";
    emboss2_mag: "emboss2_mag";
    emboss2_round: "emboss2_round";
    emboss2_sculpt: "emboss2_sculpt";
    emboss3_mag: "emboss3_mag";
    emboss_border: "emboss_border";
    emboss_coverage_lg: "emboss_coverage_lg";
    emboss_coverage_sm: "emboss_coverage_sm";
    emboss_coverage_std: "emboss_coverage_std";
    emboss_coverage_xl: "emboss_coverage_xl";
    emboss_foil_stamp: "emboss_foil_stamp";
}>;
type _EmbossAdderCodeSchema = typeof _EmbossAdderCode;
export interface EmbossAdderCodeSchema extends _EmbossAdderCodeSchema {
}
export declare const EmbossAdderCode: EmbossAdderCodeSchema;
export type EmbossAdderCode = z.infer<typeof EmbossAdderCode>;
export {};
//# sourceMappingURL=EmbossAdderCode.d.ts.map