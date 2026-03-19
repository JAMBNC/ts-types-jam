import { z } from "zod";
import { AdderCodeEnum } from "./AdderCodeEnum.js";
import { ContentPlacement } from "./ContentPlacement.js";
import { DesignerConfigFeatureValue } from "./DesignerConfigFeatureValue.js";
import { InitialOnLoad } from "./InitialOnLoad.js";

export const DesignerConfig = z
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
        processes: DesignerConfigFeatureValue.optional(),
        process: z
          .object({
            ink: z
              .object({
                configuration: DesignerConfigFeatureValue.optional(),
                coverage: DesignerConfigFeatureValue.optional(),
                stamps: DesignerConfigFeatureValue.optional(),
                colors: DesignerConfigFeatureValue.optional(),
                white: DesignerConfigFeatureValue.optional(),
              })
              .passthrough()
              .optional(),
            embossing: z
              .object({
                stamps: DesignerConfigFeatureValue.optional(),
                border: DesignerConfigFeatureValue.optional(),
                coverage: DesignerConfigFeatureValue.optional(),
              })
              .passthrough()
              .optional(),
            foil: z
              .object({
                configuration: DesignerConfigFeatureValue.optional(),
                color: DesignerConfigFeatureValue.optional(),
                stamps: DesignerConfigFeatureValue.optional(),
                coverage: DesignerConfigFeatureValue.optional(),
              })
              .passthrough()
              .optional(),
            engraving: z
              .object({
                configuration: DesignerConfigFeatureValue.optional(),
                coverage: DesignerConfigFeatureValue.optional(),
                stamps: DesignerConfigFeatureValue.optional(),
                colors: DesignerConfigFeatureValue.optional(),
              })
              .passthrough()
              .optional(),
            letterpress: z
              .object({
                configuration: DesignerConfigFeatureValue.optional(),
                coverage: DesignerConfigFeatureValue.optional(),
                stamps: DesignerConfigFeatureValue.optional(),
                colors: DesignerConfigFeatureValue.optional(),
              })
              .passthrough()
              .optional(),
          })
          .passthrough()
          .optional(),
        slits: z
          .object({
            left: DesignerConfigFeatureValue.optional(),
            middle: DesignerConfigFeatureValue.optional(),
            right: DesignerConfigFeatureValue.optional(),
            frontCover: DesignerConfigFeatureValue.optional(),
            certificate: DesignerConfigFeatureValue.optional(),
            flap: DesignerConfigFeatureValue.optional(),
          })
          .passthrough()
          .optional(),
        addressing: z
          .object({
            variable: DesignerConfigFeatureValue.optional(),
            return: DesignerConfigFeatureValue.optional(),
          })
          .passthrough()
          .optional(),
        coatings: z
          .object({
            uv: DesignerConfigFeatureValue.optional(),
            aqueous: DesignerConfigFeatureValue.optional(),
          })
          .passthrough()
          .optional(),
        roll: z
          .object({
            qty: DesignerConfigFeatureValue.optional(),
            perforation: DesignerConfigFeatureValue.optional(),
            core: DesignerConfigFeatureValue.optional(),
          })
          .passthrough()
          .optional(),
        sign: z
          .object({
            accessory: DesignerConfigFeatureValue.optional(),
            fastener: DesignerConfigFeatureValue.optional(),
            wallholder: DesignerConfigFeatureValue.optional(),
            backing: DesignerConfigFeatureValue.optional(),
          })
          .passthrough()
          .optional(),
      })
      .passthrough()
      .superRefine((value, ctx) => {
        const defined_keys = new Set([
          "processes",
          "process",
          "slits",
          "addressing",
          "coatings",
          "roll",
          "sign",
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
    initialOnLoad: InitialOnLoad.optional(),
    productCategory: z.string(),
    vendors: z.record(z.string(), z.array(AdderCodeEnum)),
  })
  .passthrough();
export type DesignerConfig = z.infer<typeof DesignerConfig>;
