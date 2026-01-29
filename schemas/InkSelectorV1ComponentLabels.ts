import { z } from "zod";

export const InkSelectorV1ComponentLabels = z.object({
  /**The label for the standard inks selection tab*/
  "tabs.standard.label": z
    .string()
    .describe("The label for the standard inks selection tab")
    .default("Standard Inks"),
  /**The label for the metallic inks selection tab*/
  "tabs.metallic.label": z
    .string()
    .describe("The label for the metallic inks selection tab")
    .default("Metallic Inks"),
  /**The label used to display the current selected ink. Can utilize $currentInk variable*/
  "selectedInk.label": z
    .string()
    .describe(
      "The label used to display the current selected ink. Can utilize $currentInk variable",
    )
    .default("Selected: $currentInk"),
  /**The label used when presenting the current colors of the image*/
  "imageColors.label": z
    .string()
    .describe("The label used when presenting the current colors of the image")
    .default("My Image Colors"),
});
export type InkSelectorV1ComponentLabels = z.infer<
  typeof InkSelectorV1ComponentLabels
>;
