import { z } from "zod/v4";
export const DesignerPricing = z
    .record(z.string(), z.array(z.any()))
    .describe("Price tiers keyed by product SKU.");
