import { z } from "zod";
export const Pivot = z.object({
    helpText: z.string().optional(),
    label: z.string(),
    values: z.array(z.any()),
});
