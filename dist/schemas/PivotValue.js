import { z } from "zod";
import { SwatchType } from "./SwatchType.js";
export const PivotValue = z
    .object({
    helpText: z.string().optional(),
    label: z.string(),
    products: z.array(z.string()),
    swatchType: SwatchType.optional(),
    swatchValue: z.string().optional(),
})
    .passthrough();
