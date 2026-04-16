import { z } from "zod";
/**A discriminated union of events emitted by the designer, keyed by event type.*/
export declare const DesignerEvent: z.ZodUnion<readonly [z.ZodObject<{
    type: z.ZodLiteral<"analytics">;
    payload: z.ZodUnion<readonly [z.ZodObject<{
        event: z.ZodLiteral<"designer_load">;
        payload: z.ZodObject<{
            loadTime: z.ZodNumber;
            designer: z.ZodEnum<{
                base: "base";
                hermes: "hermes";
            }>;
            productUrl: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_tool_interaction">;
        payload: z.ZodObject<{
            tool: z.ZodString;
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_review_design">;
        payload: z.ZodRecord<z.ZodString, z.ZodNever>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_design_started">;
        payload: z.ZodRecord<z.ZodString, z.ZodNever>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_add_text">;
        payload: z.ZodRecord<z.ZodString, z.ZodNever>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_add_image">;
        payload: z.ZodRecord<z.ZodString, z.ZodNever>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_add_mailing_address">;
        payload: z.ZodObject<{
            type: z.ZodEnum<{
                single: "single";
                variable: "variable";
            }>;
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_add_return_address">;
        payload: z.ZodRecord<z.ZodString, z.ZodNever>;
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
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_image_uploaded">;
        payload: z.ZodRecord<z.ZodString, z.ZodNever>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_image_removed_from_gallery">;
        payload: z.ZodRecord<z.ZodString, z.ZodNever>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_print_preview_viewed">;
        payload: z.ZodRecord<z.ZodString, z.ZodNever>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_download_proof">;
        payload: z.ZodRecord<z.ZodString, z.ZodNever>;
    }, z.core.$strict>, z.ZodObject<{
        event: z.ZodLiteral<"designer_design_saved">;
        payload: z.ZodObject<{
            designId: z.ZodString;
            snapshots: z.ZodArray<z.ZodObject<{
                url: z.ZodString;
                label: z.ZodString;
            }, z.core.$strict>>;
            designReturnUrl: z.ZodString;
        }, z.core.$strict>;
    }, z.core.$strict>]>;
}, z.core.$strict>, z.ZodObject<{
    type: z.ZodLiteral<"save">;
    payload: z.ZodObject<{
        addressListId: z.ZodNumber;
        alchemySnapshots: z.ZodString;
        autoSeparated: z.ZodBoolean;
        config: z.ZodString;
        isCmyk: z.ZodBoolean;
        orientation: z.ZodNumber;
        pages: z.ZodString;
        pagesOrdered: z.ZodString;
        preflight: z.ZodString;
        productSku: z.ZodString;
        qty: z.ZodNumber;
        returnAddressString: z.ZodString;
        sRecipAddressString: z.ZodString;
        designerInstanceCode: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    type: z.ZodLiteral<"review">;
    payload: z.ZodObject<{
        product: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        quantity: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    type: z.ZodLiteral<"persistence">;
    payload: z.ZodObject<{
        isDirty: z.ZodBoolean;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    type: z.ZodLiteral<"logoClick">;
    payload: z.ZodRecord<z.ZodString, z.ZodNever>;
}, z.core.$strict>, z.ZodObject<{
    type: z.ZodLiteral<"login">;
    payload: z.ZodRecord<z.ZodString, z.ZodNever>;
}, z.core.$strict>]>;
export type DesignerEvent = z.infer<typeof DesignerEvent>;
//# sourceMappingURL=DesignerEvent.d.ts.map