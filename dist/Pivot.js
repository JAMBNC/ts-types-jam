import { z } from "zod/v4";
export const Pivot = z.object({
    helpText: z.string().optional(),
    label: z.string(),
    values: z.array(z.object({
        helpText: z.string().optional(),
        label: z.string(),
        skus: z.array(z.string()),
        swatchType: z.enum(["TEXT", "IMAGE", "RGB"]).optional(),
        swatchValue: z.string().optional(),
    })),
});
