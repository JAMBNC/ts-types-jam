import { z } from "zod";
export const PredefinedAttributeValue = z
    .object({
    identifiers: z.record(z.any()),
    swatches: z.record(z.string()).optional(),
    value: z.string(),
})
    .passthrough();
