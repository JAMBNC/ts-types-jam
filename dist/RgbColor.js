import { z } from "zod";
/**A color with name, hex code, and optional RGBA components.*/
export const RgbColor = z
    .object({
    /**Display name of the color.*/
    name: z.string().describe("Display name of the color."),
    /**Hex color code.*/
    hex: z.string().describe("Hex color code."),
    /**Unique identifier for the color.*/
    id: z.string().describe("Unique identifier for the color."),
    /**Red component (0-255).*/
    r: z
        .number()
        .int()
        .gte(0)
        .lte(255)
        .describe("Red component (0-255).")
        .optional(),
    /**Green component (0-255).*/
    g: z
        .number()
        .int()
        .gte(0)
        .lte(255)
        .describe("Green component (0-255).")
        .optional(),
    /**Blue component (0-255).*/
    b: z
        .number()
        .int()
        .gte(0)
        .lte(255)
        .describe("Blue component (0-255).")
        .optional(),
    /**Alpha component (0-1).*/
    a: z.number().gte(0).lte(1).describe("Alpha component (0-1).").optional(),
})
    .strict()
    .describe("A color with name, hex code, and optional RGBA components.");
