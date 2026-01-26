import { z } from "zod/v4";
export const VendorColor = z
    .any()
    .describe("Schema definitions for printing color systems including processes, color spaces, colors, and palettes.");
