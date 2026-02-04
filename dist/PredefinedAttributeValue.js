import { z } from "zod";
export const PredefinedAttributeValue = z
    .object({
    identifiers: z.record(z.any()),
    swatches: z.record(z.enum(["TEXT", "IMAGE", "RGB"]), z.string()).optional(),
    value: z.string(),
})
    .passthrough();
