import { z } from "zod";
import { DesignerConfig } from "./DesignerConfig.js";
import { DesignerPricing } from "./DesignerPricing.js";
import { Product } from "./Product.js";
/**Event emitted when the designer should reinitialize with the payload data*/
export const DesignerReinitializeEvent = z
    .object({
    type: z.literal("reinitialize"),
    payload: z
        .object({
        /**Currently the design formula, to be the design state*/
        design: z
            .record(z.string(), z.any())
            .describe("Currently the design formula, to be the design state"),
        /**The designer configuration schema or URI endpoint that returns a designer configuration schema*/
        config: z
            .union([DesignerConfig, z.string().url()])
            .describe("The designer configuration schema or URI endpoint that returns a designer configuration schema"),
        /**A Product schema or URI endpoint that returns a Product schema*/
        product: z
            .union([Product, z.string().url()])
            .describe("A Product schema or URI endpoint that returns a Product schema"),
        /**A DesignerPricing schema or URI endpoint that returns a DesignerPricing schema*/
        pricing: z
            .union([DesignerPricing, z.string().url()])
            .describe("A DesignerPricing schema or URI endpoint that returns a DesignerPricing schema"),
        /**An (optional) object containing additional metadata for the designer initialization payload.*/
        metadata: z
            .record(z.string(), z.any())
            .describe("An (optional) object containing additional metadata for the designer initialization payload.")
            .optional(),
    })
        .passthrough(),
})
    .strict()
    .describe("Event emitted when the designer should reinitialize with the payload data");
