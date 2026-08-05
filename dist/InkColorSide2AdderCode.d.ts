import { z } from "zod";
declare const _InkColorSide2AdderCode: z.ZodEnum<{
    color_side2_cmyk: "color_side2_cmyk";
    color_side2_four_color: "color_side2_four_color";
    color_side2_one_color: "color_side2_one_color";
    color_side2_three_color: "color_side2_three_color";
    color_side2_two_color: "color_side2_two_color";
}>;
type _InkColorSide2AdderCodeSchema = typeof _InkColorSide2AdderCode;
export interface InkColorSide2AdderCodeSchema extends _InkColorSide2AdderCodeSchema {
}
export declare const InkColorSide2AdderCode: InkColorSide2AdderCodeSchema;
export type InkColorSide2AdderCode = z.infer<typeof InkColorSide2AdderCode>;
export {};
//# sourceMappingURL=InkColorSide2AdderCode.d.ts.map