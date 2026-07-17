import { z } from "zod";

export const PaletteAllowlistItem = z
  .object({
    /**The allowed palette's uuid*/
    uuid: z
      .string()
      .regex(
        /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
      )
      .describe("The allowed palette's uuid"),
    /**Are custom colors allowed for this palette?*/
    allowCustomColors: z
      .boolean()
      .describe("Are custom colors allowed for this palette?")
      .optional(),
    /**Is background coloring allowed for this palette?*/
    allowBackgroundColor: z
      .boolean()
      .describe("Is background coloring allowed for this palette?")
      .optional(),
    allowlist: z
      .object({
        /**Array of allowed color uuids. Must already be in palette.*/
        colors: z
          .array(
            z
              .string()
              .regex(
                /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
              ),
          )
          .describe("Array of allowed color uuids. Must already be in palette.")
          .optional(),
      })
      .strict()
      .optional(),
  })
  .strict();
export type PaletteAllowlistItem = z.infer<typeof PaletteAllowlistItem>;
