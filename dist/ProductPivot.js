import { z } from "zod";
export const ProductPivot = z.object({
    helpText: z.string().optional(),
    label: z.string(),
    values: z.record(z.any()),
});
