import { z } from "zod/v4";

export const DesignerPricing = z
  .record(z.string(), z.array(z.any()))
  .describe("Price tiers keyed by product SKU.");
export type DesignerPricing = z.infer<typeof DesignerPricing>;
