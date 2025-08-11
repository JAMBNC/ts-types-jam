import { z } from "zod/v4";
export const Pivot = z.object({
    code: z.string(),
    helpText: z.string().optional(),
    type: z.enum(["Primary", "Secondary"]).optional(),
    values: z.array(z.object({
        helpText: z.string().optional(),
        label: z.string(),
        products: z.array(z.string()),
        swatchType: z.enum(["TEXT", "IMAGE", "RGB"]).optional(),
        swatchValue: z.string().optional(),
    })),
});
