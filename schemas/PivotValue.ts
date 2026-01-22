import { z } from "zod/v4";

export const PivotValue = z.object({
  helpText: z.string().optional(),
  label: z.string(),
  products: z.array(z.string()),
  swatchType: z.enum(["TEXT", "IMAGE", "RGB"]).optional(),
  swatchValue: z.string().optional(),
});
export type PivotValue = z.infer<typeof PivotValue>;
