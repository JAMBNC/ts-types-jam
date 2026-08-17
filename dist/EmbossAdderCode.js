import { z } from "zod";
const _EmbossAdderCode = z.enum([
    "emboss1_mag",
    "emboss1_bev",
    "emboss1_round",
    "emboss1_sculpt",
    "emboss1_burnish",
    "emboss2_mag",
    "emboss2_bev",
    "emboss2_round",
    "emboss2_sculpt",
    "emboss2_burnish",
    "emboss3_mag",
    "emboss_coverage_sm",
    "emboss_coverage_std",
    "emboss_coverage_lg",
    "emboss_coverage_xl",
    "emboss_foil_stamp",
    "emboss_border",
]);
export const EmbossAdderCode = _EmbossAdderCode;
