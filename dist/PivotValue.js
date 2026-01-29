import { z } from "zod";
export const PivotValue = z.object({
    helpText: z.string().optional(),
    label: z.string(),
    products: z.array(z.string()),
    swatchType: z.enum(["TEXT", "IMAGE", "RGB"]).optional(),
    swatchValue: z.string().optional(),
});
