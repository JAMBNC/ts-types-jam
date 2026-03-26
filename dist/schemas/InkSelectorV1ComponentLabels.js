import { z } from "zod";
export const InkSelectorV1ComponentLabels = z
    .object({
    /**The label used to display the current selected ink. Can utilize $currentInk variable*/
    "selectedInk.label": z
        .string()
        .describe("The label used to display the current selected ink. Can utilize $currentInk variable")
        .default("Selected: $currentInk"),
    /**The label used when presenting the current colors of the image*/
    "imageColors.label": z
        .string()
        .describe("The label used when presenting the current colors of the image")
        .default("My Image Colors"),
})
    .passthrough();
