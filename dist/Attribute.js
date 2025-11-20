import { z } from "zod/v4";
export const Attribute = z.object({
    code: z.string(),
    displayForCustomer: z.boolean(),
    identifiers: z.record(z.string(), z.any()).optional(),
    label: z.string(),
    predefinedValues: z
        .array(z.object({
        identifiers: z.record(z.string(), z.any()),
        swatches: z.record(z.string(), z.any()).optional(),
        value: z.string(),
    }))
        .optional(),
    renderPreference: z.enum(["tabs", "dropdown", "swatches", "modal"]),
    usedForProductSelection: z.boolean(),
});
