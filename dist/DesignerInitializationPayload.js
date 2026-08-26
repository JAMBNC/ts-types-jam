import { z } from "zod";
import { DesignerAuth } from "./DesignerAuth.js";
import { DesignerConfig } from "./DesignerConfig.js";
import { DesignerEndpoints } from "./DesignerEndpoints.js";
import { DesignerImageReductionConfig } from "./DesignerImageReductionConfig.js";
import { DesignerPricing } from "./DesignerPricing.js";
import { DesignerUiLabels } from "./DesignerUiLabels.js";
import { Product } from "./Product.js";
import { WorkspaceOption } from "./WorkspaceOption.js";
import { WorkspaceTag } from "./WorkspaceTag.js";
const _DesignerInitializationPayload = z
    .object({
    /**Currently the design formula, to be the design state*/
    design: z
        .record(z.string(), z.any())
        .describe("Currently the design formula, to be the design state")
        .optional(),
    /**The designer configuration schema or URI endpoint that returns a designer configuration schema*/
    config: z
        .union([DesignerConfig, z.string().url()])
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
    uiLabels: DesignerUiLabels,
    /**An (optional) object containing additional metadata for the designer initialization payload.*/
    metadata: z
        .record(z.string(), z.any())
        .describe("An (optional) object containing additional metadata for the designer initialization payload.")
        .optional(),
    imageReduction: DesignerImageReductionConfig,
    /**List of workspace options for the product.*/
    workspaceOptions: z
        .array(WorkspaceOption)
        .describe("List of workspace options for the product.")
        .optional(),
    /**List of workspace tags that are auto-applied to the active workspace (before workspace expansion).*/
    workspaceSessionTags: z
        .array(WorkspaceTag)
        .describe("List of workspace tags that are auto-applied to the active workspace (before workspace expansion).")
        .optional(),
    /**The properties of the cart item holding the design.*/
    designCartItem: z
        .object({ quantity: z.number().int() })
        .passthrough()
        .describe("The properties of the cart item holding the design.")
        .optional(),
    /**Partner Code*/
    partner: z.string().describe("Partner Code").optional(),
    /**Channel Code*/
    channel: z.string().describe("Channel Code").optional(),
})
    .passthrough();
export const DesignerInitializationPayload = _DesignerInitializationPayload;
