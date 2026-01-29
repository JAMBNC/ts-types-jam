import { z } from "zod";

export const InkSelectorV1ComponentLabels = z.object({
  "tabs.standard.label": z
    .string()
    .describe("The label for the standard inks selection tab")
    .default("Standard Inks"),
  "tabs.metallic.label": z
    .string()
    .describe("The label for the metallic inks selection tab")
    .default("Metallic Inks"),
  "selectedInk.label": z
    .string()
    .describe(
      "The label used to display the current selected ink. Can utilize $currentInk variable",
    )
    .default("Selected: $currentInk"),
  "imageColors.label": z
    .string()
    .describe("The label used when presenting the current colors of the image")
    .default("My Image Colors"),
});
export type InkSelectorV1ComponentLabels = z.infer<
  typeof InkSelectorV1ComponentLabels
>;
