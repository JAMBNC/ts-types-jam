import { z } from "zod";
import { AdderCodeEnum } from "./AdderCodeEnum.js";
import { ContentPlacement } from "./ContentPlacement.js";
import { DesignerConfigFeatureValue } from "./DesignerConfigFeatureValue.js";
import { ProcessRestriction } from "./ProcessRestriction.js";
const _DesignerConfig = z
    .object({
    adders: z.record(z.string(), z.string()).superRefine((value, ctx) => {
        for (const key in value) {
            const result = AdderCodeEnum.safeParse(key);
            if (!result.success) {
                ctx.addIssue({
                    path: [...ctx.path, key],
                    code: "custom",
                    message: `Invalid property name: ${key}`,
                    params: {
                        issues: result.error.issues,
                    },
                });
            }
        }
    }),
    defaultAdders: z.record(z.string(), AdderCodeEnum).optional(),
    defaultContentPlacement: z.array(ContentPlacement).optional(),
    features: z
        .object({
        addressing: z
            .object({
            return: DesignerConfigFeatureValue.optional(),
            variable: DesignerConfigFeatureValue.optional(),
        })
            .passthrough()
            .optional(),
        coatings: z
            .object({
            aqueous: DesignerConfigFeatureValue.optional(),
            uv: DesignerConfigFeatureValue.optional(),
            lamination: DesignerConfigFeatureValue.optional(),
        })
            .passthrough()
            .optional(),
        process: z
            .object({
            embossing: z
                .object({
                border: DesignerConfigFeatureValue.optional(),
                coverage: DesignerConfigFeatureValue.optional(),
                stamps: DesignerConfigFeatureValue.optional(),
            })
                .passthrough()
                .optional(),
            engraving: z
                .object({
                colors: DesignerConfigFeatureValue.optional(),
                configuration: DesignerConfigFeatureValue.optional(),
                coverage: DesignerConfigFeatureValue.optional(),
                stamps: DesignerConfigFeatureValue.optional(),
            })
                .passthrough()
                .optional(),
            foil: z
                .object({
                color: DesignerConfigFeatureValue.optional(),
                configuration: DesignerConfigFeatureValue.optional(),
                coverage: DesignerConfigFeatureValue.optional(),
                stamps: DesignerConfigFeatureValue.optional(),
            })
                .passthrough()
                .optional(),
            ink: z
                .object({
                colors: DesignerConfigFeatureValue.optional(),
                configuration: DesignerConfigFeatureValue.optional(),
                coverage: DesignerConfigFeatureValue.optional(),
                stamps: DesignerConfigFeatureValue.optional(),
                white: DesignerConfigFeatureValue.optional(),
            })
                .passthrough()
                .optional(),
            letterpress: z
                .object({
                colors: DesignerConfigFeatureValue.optional(),
                configuration: DesignerConfigFeatureValue.optional(),
                coverage: DesignerConfigFeatureValue.optional(),
                stamps: DesignerConfigFeatureValue.optional(),
            })
                .passthrough()
                .optional(),
        })
            .passthrough()
            .optional(),
        processes: DesignerConfigFeatureValue.optional(),
        layout: z
            .object({
            transpose: z
                .object({ sheet: DesignerConfigFeatureValue.optional() })
                .passthrough()
                .optional(),
            orientation: DesignerConfigFeatureValue.optional(),
        })
            .passthrough()
            .optional(),
        proof: z
            .object({ digital: DesignerConfigFeatureValue.optional() })
            .passthrough()
            .optional(),
        roll: z
            .object({
            core: DesignerConfigFeatureValue.optional(),
            perforation: DesignerConfigFeatureValue.optional(),
            qty: DesignerConfigFeatureValue.optional(),
            mirroring: DesignerConfigFeatureValue.optional(),
            cutting: DesignerConfigFeatureValue.optional(),
        })
            .passthrough()
            .optional(),
        sign: z
            .object({
            accessory: DesignerConfigFeatureValue.optional(),
            backing: DesignerConfigFeatureValue.optional(),
            fastener: DesignerConfigFeatureValue.optional(),
            wallholder: DesignerConfigFeatureValue.optional(),
        })
            .passthrough()
            .optional(),
        slits: z
            .object({
            certificate: DesignerConfigFeatureValue.optional(),
            flap: DesignerConfigFeatureValue.optional(),
            frontCover: DesignerConfigFeatureValue.optional(),
            left: DesignerConfigFeatureValue.optional(),
            middle: DesignerConfigFeatureValue.optional(),
            right: DesignerConfigFeatureValue.optional(),
        })
            .passthrough()
            .optional(),
    })
        .passthrough()
        .superRefine((value, ctx) => {
        const defined_keys = new Set([
            "addressing",
            "coatings",
            "process",
            "processes",
            "layout",
            "proof",
            "roll",
            "sign",
            "slits",
        ]);
        for (const key in value) {
            if (!defined_keys.has(key)) {
                const result = DesignerConfigFeatureValue.safeParse(value[key]);
                if (!result.success) {
                    ctx.addIssue({
                        path: [...ctx.path, key],
                        code: "custom",
                        message: `Invalid input: must match additionalProperties schema`,
                        params: {
                            issues: result.error.issues,
                        },
                    });
                }
            }
        }
    }),
    pageLabels: z.array(z.string()).optional(),
    processRestrictions: z.array(ProcessRestriction).optional(),
    productCategory: z.string(),
    vendors: z.record(z.string(), z.array(AdderCodeEnum)),
})
    .passthrough();
export const DesignerConfig = _DesignerConfig;
