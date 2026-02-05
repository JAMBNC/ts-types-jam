import { z } from "zod";
import { DesignerAuth } from "./DesignerAuth.js";
import { DesignerEndpoints } from "./DesignerEndpoints.js";
import { DesignerPricing } from "./DesignerPricing.js";
import { DesignerUiLabels } from "./DesignerUiLabels.js";
import { Product } from "./Product.js";
export const DesignerInitializationPayload = z
    .object({
    /**The designer configuration schema or URI endpoint that returns a designer configuration schema*/
    config: z
        .union([z.record(z.string(), z.any()), z.string().url()])
        .describe("The designer configuration schema or URI endpoint that returns a designer configuration schema"),
    /**A Product schema or URI endpoint that returns a Product schema*/
    product: z
        .union([Product, z.string().url()])
        .describe("A Product schema or URI endpoint that returns a Product schema"),
    endpoints: DesignerEndpoints,
    auth: DesignerAuth,
    /**A DesignerPricing schema or URI endpoint that returns a DesignerPricing schema*/
    pricing: z
        .union([DesignerPricing, z.string().url()])
        .describe("A DesignerPricing schema or URI endpoint that returns a DesignerPricing schema")
        .optional(),
    /**The UI Label schema used to configure the labels on the designer (optional)*/
    uiLabels: z
        .union([DesignerUiLabels, z.string().url()])
        .describe("The UI Label schema used to configure the labels on the designer (optional)")
        .optional(),
    /**An (optional) object containing additional metadata for the designer initialization payload.*/
    metadata: z
        .record(z.string(), z.any())
        .describe("An (optional) object containing additional metadata for the designer initialization payload.")
        .optional(),
})
    .passthrough();
