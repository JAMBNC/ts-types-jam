import { z } from "zod";

/**A font definition for injection into the designer.*/
export const DesignerFont = z
  .object({
    /**A unique UUID identifier for the font.*/
    uuid: z.string().uuid().describe("A unique UUID identifier for the font."),
    /**The name of the font.*/
    name: z.string().describe("The name of the font."),
  })
  .strict()
  .describe("A font definition for injection into the designer.");
export type DesignerFont = z.infer<typeof DesignerFont>;
