import { z } from "zod/v4";
export const Attribute = z.object({
    code: z.string(),
    displayForCustomer: z.boolean(),
    label: z.string(),
    predefinedValues: z
        .array(z.object({
        identifiers: z.record(z.string(), z.any()),
        swatches: z.record(z.string(), z.any()).optional(),
        value: z.string(),
    }))
        .optional(),
    selectionRenderPreference: z.enum(["SELECT", "SWATCH", "TEXT_SWATCH"]),
    usedForProductSelection: z.boolean(),
});
