import { z } from "zod/v4";

export const PredefinedAttributeValue = z.object({
  identifiers: z.record(z.string(), z.any()),
  swatches: z.record(z.string(), z.any()).optional(),
  value: z.string(),
});
export type PredefinedAttributeValue = z.infer<typeof PredefinedAttributeValue>;
