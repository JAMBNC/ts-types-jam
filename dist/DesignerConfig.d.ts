import { z } from "zod";
export declare const DesignerConfig: z.ZodObject<{
    adders: z.ZodRecord<z.ZodString, z.ZodString>;
    default_content_placement: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        side: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodString>;
        x: z.ZodOptional<z.ZodString>;
        xType: z.ZodOptional<z.ZodEnum<{
            relative: "relative";
            absolute: "absolute";
        }>>;
        y: z.ZodOptional<z.ZodString>;
        yType: z.ZodOptional<z.ZodEnum<{
            relative: "relative";
            absolute: "absolute";
        }>>;
    }, z.core.$loose>>>;
    features: z.ZodAny;
    initial_on_load: z.ZodOptional<z.ZodObject<{
        force_adders: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$loose>>;
    product_category: z.ZodString;
    vendors: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
        foil_first_color: "foil_first_color";
        foil_second_color: "foil_second_color";
        foil_third_color: "foil_third_color";
        foil_fourth_color: "foil_fourth_color";
        foil_fifth_color: "foil_fifth_color";
    }>, z.ZodEnum<{
        foil_coverage_sm: "foil_coverage_sm";
        foil_coverage_std: "foil_coverage_std";
        foil_coverage_lg: "foil_coverage_lg";
        foil_coverage_xl: "foil_coverage_xl";
    }>, z.ZodEnum<{
        foil_stamp_1: "foil_stamp_1";
        foil_stamp_2: "foil_stamp_2";
        foil_stamp_3: "foil_stamp_3";
        foil_stamp_4: "foil_stamp_4";
        foil_stamp_5: "foil_stamp_5";
    }>, z.ZodEnum<{
        text: "text";
        image: "image";
    }>, z.ZodEnum<{
        color_side1_blk: "color_side1_blk";
        color_side1_std: "color_side1_std";
        color_side1_pms: "color_side1_pms";
        color_side1_blk_std: "color_side1_blk_std";
        color_side1_blk_pms: "color_side1_blk_pms";
        color_side1_2std: "color_side1_2std";
        color_side1_std_pms: "color_side1_std_pms";
        color_side1_2pms: "color_side1_2pms";
        color_side1_blk_2std: "color_side1_blk_2std";
        color_side1_blk_std_pms: "color_side1_blk_std_pms";
        color_side1_blk_2pms: "color_side1_blk_2pms";
        color_side1_3std: "color_side1_3std";
        color_side1_2std_pms: "color_side1_2std_pms";
        color_side1_std_2pms: "color_side1_std_2pms";
        color_side1_3pms: "color_side1_3pms";
        color_side1_blk_3std: "color_side1_blk_3std";
        color_side1_blk_2std_pms: "color_side1_blk_2std_pms";
        color_side1_blk_std_2pms: "color_side1_blk_std_2pms";
        color_side1_blk_3pms: "color_side1_blk_3pms";
        color_side1_4std: "color_side1_4std";
        color_side1_3std_pms: "color_side1_3std_pms";
        color_side1_2std_2pms: "color_side1_2std_2pms";
        color_side1_std_3pms: "color_side1_std_3pms";
        color_side1_4pms: "color_side1_4pms";
        color_side1_cmyk: "color_side1_cmyk";
    }>, z.ZodEnum<{
        color_side2_one_color: "color_side2_one_color";
        color_side2_two_color: "color_side2_two_color";
        color_side2_three_color: "color_side2_three_color";
        color_side2_four_color: "color_side2_four_color";
        color_side2_cmyk: "color_side2_cmyk";
    }>, z.ZodEnum<{
        print_method_auto: "print_method_auto";
        print_method_digital: "print_method_digital";
        print_method_offset: "print_method_offset";
        letterpress_ink1: "letterpress_ink1";
    }>, z.ZodEnum<{
        varaddress_side1: "varaddress_side1";
        varaddress_side2: "varaddress_side2";
    }>]>>>;
}, z.core.$loose>;
export type DesignerConfig = z.infer<typeof DesignerConfig>;
//# sourceMappingURL=DesignerConfig.d.ts.map