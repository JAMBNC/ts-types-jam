import { z } from "zod";
export const PredefinedAttributeValue = z
    .object({
    identifiers: z.record(z.any()),
    swatches: z
        .object({ TEXT: z.string(), IMAGE: z.string(), RGB: z.string() })
        .partial()
        .optional(),
    value: z.string(),
})
    .passthrough();
