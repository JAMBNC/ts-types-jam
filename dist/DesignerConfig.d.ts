import { z } from "zod";
declare const _DesignerConfig: z.ZodObject<{
    adders: z.ZodRecord<z.ZodString, z.ZodString>;
    defaultAdders: z.ZodOptional<z.ZodRecord<z.ZodString, import("./AdderCodeEnum.js").AdderCodeEnumSchema>>;
    defaultContentPlacement: z.ZodOptional<z.ZodArray<import("./ContentPlacement.js").ContentPlacementSchema>>;
    features: z.ZodObject<{
        addressing: z.ZodOptional<z.ZodObject<{
            return: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
            variable: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
        }, z.core.$loose>>;
        coatings: z.ZodOptional<z.ZodObject<{
            aqueous: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
            uv: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
            lamination: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
        }, z.core.$loose>>;
        process: z.ZodOptional<z.ZodObject<{
            embossing: z.ZodOptional<z.ZodObject<{
                border: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
                coverage: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
                stamps: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
            }, z.core.$loose>>;
            engraving: z.ZodOptional<z.ZodObject<{
                colors: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
                configuration: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
                coverage: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
                stamps: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
            }, z.core.$loose>>;
            foil: z.ZodOptional<z.ZodObject<{
                color: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
                configuration: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
                coverage: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
                stamps: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
            }, z.core.$loose>>;
            ink: z.ZodOptional<z.ZodObject<{
                colors: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
                configuration: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
                coverage: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
                stamps: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
                white: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
            }, z.core.$loose>>;
            letterpress: z.ZodOptional<z.ZodObject<{
                colors: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
                configuration: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
                coverage: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
                stamps: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
            }, z.core.$loose>>;
        }, z.core.$loose>>;
        processes: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
        layout: z.ZodOptional<z.ZodObject<{
            transpose: z.ZodOptional<z.ZodObject<{
                sheet: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
            }, z.core.$loose>>;
            orientation: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
        }, z.core.$loose>>;
        proof: z.ZodOptional<z.ZodObject<{
            digital: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
        }, z.core.$loose>>;
        roll: z.ZodOptional<z.ZodObject<{
            core: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
            perforation: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
            qty: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
            mirroring: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
            cutting: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
        }, z.core.$loose>>;
        sign: z.ZodOptional<z.ZodObject<{
            accessory: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
            backing: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
            fastener: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
            wallholder: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
        }, z.core.$loose>>;
        slits: z.ZodOptional<z.ZodObject<{
            certificate: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
            flap: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
            frontCover: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
            left: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
            middle: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
            right: z.ZodOptional<import("./DesignerConfigFeatureValue.js").DesignerConfigFeatureValueSchema>;
        }, z.core.$loose>>;
    }, z.core.$loose>;
    pageLabels: z.ZodOptional<z.ZodArray<z.ZodString>>;
    processRestrictions: z.ZodOptional<z.ZodArray<import("./ProcessRestriction.js").ProcessRestrictionSchema>>;
    productCategory: z.ZodString;
    vendors: z.ZodRecord<z.ZodString, z.ZodArray<import("./AdderCodeEnum.js").AdderCodeEnumSchema>>;
}, z.core.$loose>;
type _DesignerConfigSchema = typeof _DesignerConfig;
export interface DesignerConfigSchema extends _DesignerConfigSchema {
}
export declare const DesignerConfig: DesignerConfigSchema;
export type DesignerConfig = z.infer<typeof DesignerConfig>;
export {};
//# sourceMappingURL=DesignerConfig.d.ts.map