import { z } from "zod";
declare const _FoilColorAdderCode: z.ZodEnum<{
    foil_fifth_color: "foil_fifth_color";
    foil_first_color: "foil_first_color";
    foil_fourth_color: "foil_fourth_color";
    foil_second_color: "foil_second_color";
    foil_seventh_color: "foil_seventh_color";
    foil_sixth_color: "foil_sixth_color";
    foil_third_color: "foil_third_color";
}>;
type _FoilColorAdderCodeSchema = typeof _FoilColorAdderCode;
export interface FoilColorAdderCodeSchema extends _FoilColorAdderCodeSchema {
}
export declare const FoilColorAdderCode: FoilColorAdderCodeSchema;
export type FoilColorAdderCode = z.infer<typeof FoilColorAdderCode>;
export {};
//# sourceMappingURL=FoilColorAdderCode.d.ts.map