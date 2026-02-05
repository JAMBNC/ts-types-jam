import { z } from "zod";

/**The unit of measurement for dimensions.*/
export const DimensionUnit = z
  .enum(["mm", "in", "px", "pt"])
  .describe("The unit of measurement for dimensions.");
export type DimensionUnit = z.infer<typeof DimensionUnit>;
