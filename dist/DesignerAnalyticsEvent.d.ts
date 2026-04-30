import { z } from "zod";
/**An analytics/tracking event emitted by the designer.*/
export declare const DesignerAnalyticsEvent: z.ZodObject<{
    type: z.ZodLiteral<"analytics">;
    payload: z.ZodUnion<readonly [z.ZodObject<{
        event: z.ZodLiteral<"designer_load">;
        payload: z.ZodObject<{
            loadTime: z.ZodNumber;
            productUrl: z.ZodOptional<z.ZodString>;
            designer: z.ZodEnum<{
                base: "base";
                hermes: "hermes";
            }>;
            merchant: z.ZodString;
            deltaTime: z.ZodNumber;
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_tool_interaction">;
        payload: z.ZodObject<{
            tool: z.ZodString;
            designer: z.ZodEnum<{
                base: "base";
                hermes: "hermes";
            }>;
            merchant: z.ZodString;
            deltaTime: z.ZodNumber;
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_review_design">;
        payload: z.ZodObject<{
            productUrl: z.ZodOptional<z.ZodString>;
            designer: z.ZodEnum<{
                base: "base";
                hermes: "hermes";
            }>;
            merchant: z.ZodString;
            deltaTime: z.ZodNumber;
            productSku: z.ZodString;
            quantity: z.ZodNumber;
            price: z.ZodNumber;
            adders: z.ZodArray<z.ZodUnion<readonly [z.ZodIntersection<z.ZodObject<{
                type: z.ZodLiteral<"coverageAdderCodeEnum">;
            }, z.core.$loose>, z.ZodUnion<readonly [z.ZodEnum<{
                foil_coverage_sm: "foil_coverage_sm";
                foil_coverage_std: "foil_coverage_std";
                foil_coverage_lg: "foil_coverage_lg";
                foil_coverage_xl: "foil_coverage_xl";
            }>, z.ZodEnum<{
                ink_coverage_sm: "ink_coverage_sm";
                ink_coverage_std: "ink_coverage_std";
            }>]>>, z.ZodEnum<{
                handling_charge: "handling_charge";
                print_charge: "print_charge";
                setup_charge: "setup_charge";
            }>, z.ZodEnum<{
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
                color_side1_white_ink: "color_side1_white_ink";
            }>, z.ZodEnum<{
                color_side2_one_color: "color_side2_one_color";
                color_side2_two_color: "color_side2_two_color";
                color_side2_three_color: "color_side2_three_color";
                color_side2_four_color: "color_side2_four_color";
                color_side2_cmyk: "color_side2_cmyk";
            }>, z.ZodEnum<{
                ink_coverage_sm: "ink_coverage_sm";
                ink_coverage_std: "ink_coverage_std";
            }>, z.ZodEnum<{
                ink_stamp_1: "ink_stamp_1";
                ink_stamp_2: "ink_stamp_2";
            }>, z.ZodEnum<{
                print_method_auto: "print_method_auto";
                print_method_digital: "print_method_digital";
                print_method_offset: "print_method_offset";
                letterpress_ink1: "letterpress_ink1";
            }>, z.ZodEnum<{
                retaddress_side1: "retaddress_side1";
                retaddress_side2: "retaddress_side2";
            }>, z.ZodEnum<{
                varaddress_side1: "varaddress_side1";
                varaddress_side2: "varaddress_side2";
            }>, z.ZodEnum<{
                white_ink_side1: "white_ink_side1";
                white_ink_side2: "white_ink_side2";
                white_ink: "white_ink";
            }>]>>;
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_design_started">;
        payload: z.ZodObject<{
            designer: z.ZodEnum<{
                base: "base";
                hermes: "hermes";
            }>;
            merchant: z.ZodString;
            deltaTime: z.ZodNumber;
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_add_text">;
        payload: z.ZodObject<{
            designer: z.ZodEnum<{
                base: "base";
                hermes: "hermes";
            }>;
            merchant: z.ZodString;
            deltaTime: z.ZodNumber;
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_add_image">;
        payload: z.ZodObject<{
            designer: z.ZodEnum<{
                base: "base";
                hermes: "hermes";
            }>;
            merchant: z.ZodString;
            deltaTime: z.ZodNumber;
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_add_mailing_address">;
        payload: z.ZodObject<{
            type: z.ZodEnum<{
                single: "single";
                variable: "variable";
            }>;
            designer: z.ZodEnum<{
                base: "base";
                hermes: "hermes";
            }>;
            merchant: z.ZodString;
            deltaTime: z.ZodNumber;
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_add_return_address">;
        payload: z.ZodObject<{
            designer: z.ZodEnum<{
                base: "base";
                hermes: "hermes";
            }>;
            merchant: z.ZodString;
            deltaTime: z.ZodNumber;
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_remove_item">;
        payload: z.ZodObject<{
            type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                text: "text";
                image: "image";
                sRecipientAddress: "sRecipientAddress";
                recipientAddress: "recipientAddress";
                returnAddress: "returnAddress";
                variableData: "variableData";
            }>, z.ZodNull]>>;
            designer: z.ZodEnum<{
                base: "base";
                hermes: "hermes";
            }>;
            merchant: z.ZodString;
            deltaTime: z.ZodNumber;
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_change_color">;
        payload: z.ZodObject<{
            type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                text: "text";
                image: "image";
                sRecipientAddress: "sRecipientAddress";
                recipientAddress: "recipientAddress";
                returnAddress: "returnAddress";
                variableData: "variableData";
            }>, z.ZodNull]>>;
            oldColors: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                representations: z.ZodObject<{
                    sRGB: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    US_Web_Coated_SWOP_v2: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    CIELAB: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>;
                uuid: z.ZodString;
            }, z.core.$loose>>;
            newColors: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                representations: z.ZodObject<{
                    sRGB: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    US_Web_Coated_SWOP_v2: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                    CIELAB: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>;
                uuid: z.ZodString;
            }, z.core.$loose>>;
            designer: z.ZodEnum<{
                base: "base";
                hermes: "hermes";
            }>;
            merchant: z.ZodString;
            deltaTime: z.ZodNumber;
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_change_font">;
        payload: z.ZodObject<{
            type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                text: "text";
                image: "image";
                sRecipientAddress: "sRecipientAddress";
                recipientAddress: "recipientAddress";
                returnAddress: "returnAddress";
                variableData: "variableData";
            }>, z.ZodNull]>>;
            oldFont: z.ZodString;
            newFont: z.ZodString;
            designer: z.ZodEnum<{
                base: "base";
                hermes: "hermes";
            }>;
            merchant: z.ZodString;
            deltaTime: z.ZodNumber;
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_change_process">;
        payload: z.ZodObject<{
            type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                text: "text";
                image: "image";
                sRecipientAddress: "sRecipientAddress";
                recipientAddress: "recipientAddress";
                returnAddress: "returnAddress";
                variableData: "variableData";
            }>, z.ZodNull]>>;
            oldProcess: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                offset: "offset";
                digital: "digital";
                foil: "foil";
                emboss: "emboss";
                screen: "screen";
                inkjet: "inkjet";
                flexography: "flexography";
                sublimation: "sublimation";
                thermal: "thermal";
            }>, z.ZodNull]>>;
            newProcess: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                offset: "offset";
                digital: "digital";
                foil: "foil";
                emboss: "emboss";
                screen: "screen";
                inkjet: "inkjet";
                flexography: "flexography";
                sublimation: "sublimation";
                thermal: "thermal";
            }>, z.ZodNull]>>;
            designer: z.ZodEnum<{
                base: "base";
                hermes: "hermes";
            }>;
            merchant: z.ZodString;
            deltaTime: z.ZodNumber;
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_image_uploaded">;
        payload: z.ZodObject<{
            designer: z.ZodEnum<{
                base: "base";
                hermes: "hermes";
            }>;
            merchant: z.ZodString;
            deltaTime: z.ZodNumber;
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_image_removed_from_gallery">;
        payload: z.ZodObject<{
            designer: z.ZodEnum<{
                base: "base";
                hermes: "hermes";
            }>;
            merchant: z.ZodString;
            deltaTime: z.ZodNumber;
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_print_preview_viewed">;
        payload: z.ZodObject<{
            designer: z.ZodEnum<{
                base: "base";
                hermes: "hermes";
            }>;
            merchant: z.ZodString;
            deltaTime: z.ZodNumber;
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_download_proof">;
        payload: z.ZodObject<{
            designer: z.ZodEnum<{
                base: "base";
                hermes: "hermes";
            }>;
            merchant: z.ZodString;
            deltaTime: z.ZodNumber;
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_design_saved">;
        payload: z.ZodObject<{
            designId: z.ZodString;
            snapshots: z.ZodArray<z.ZodObject<{
                url: z.ZodString;
                label: z.ZodString;
            }, z.core.$strict>>;
            designReturnUrl: z.ZodString;
            designer: z.ZodEnum<{
                base: "base";
                hermes: "hermes";
            }>;
            merchant: z.ZodString;
            deltaTime: z.ZodNumber;
        }, z.core.$strict>;
    }, z.core.$strict>]>;
}, z.core.$strict>;
export type DesignerAnalyticsEvent = z.infer<typeof DesignerAnalyticsEvent>;
//# sourceMappingURL=DesignerAnalyticsEvent.d.ts.map