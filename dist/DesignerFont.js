import { z } from "zod";
export const DesignerFont = z
    .object({
    uuid: z.string().uuid().describe("A unique UUID identifier for the font."),
    name: z.string().describe("The name of the font."),
})
    .strict()
    .describe("A font definition for injection into the designer.");
