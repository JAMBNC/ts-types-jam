import { z } from "zod";
import { BaseIngredient } from "./BaseIngredient.js";
import { Dimension } from "./Dimension.js";
const _DataIngredient = BaseIngredient.merge(z
    .object({
    type: z.literal("data"),
    /**The data payload describing the content.*/
    data: z
        .object({
        height: Dimension.optional(),
        layerName: z.string().optional(),
        path: z.string().optional(),
        tag: z.string().optional(),
        width: Dimension.optional(),
        x: Dimension.optional(),
        y: Dimension.optional(),
        additionalProperties: z.record(z.string(), z.any()).optional(),
    })
        .passthrough()
        .describe("The data payload describing the content."),
})
    .passthrough()).describe("An ingredient that holds a generic data payload such as textures or backgrounds.");
/**An ingredient that holds a generic data payload such as textures or backgrounds.*/
export const DataIngredient = _DataIngredient;
