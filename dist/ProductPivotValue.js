import { z } from "zod";
export const ProductPivotValue = z.object({
    helpText: z.string().optional(),
    label: z.string(),
    skus: z.array(z.string()),
    swatchType: z.enum(["Text", "Image", "Color"]).optional(),
    swatchValue: z.string().optional(),
});
