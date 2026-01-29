import { z } from "zod";

/**Price tiers keyed by product SKU.*/
export const DesignerPricing = z
  .record(z.array(z.any()))
  .describe("Price tiers keyed by product SKU.");
export type DesignerPricing = z.infer<typeof DesignerPricing>;
