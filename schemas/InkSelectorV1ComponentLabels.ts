import { z } from "zod";

const _InkSelectorV1ComponentLabels = z
  .object({
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
      .describe(
        "The label used when presenting the current colors of the image",
      )
      .default("My Image Colors"),
  })
  .passthrough();
type _InkSelectorV1ComponentLabelsSchema = typeof _InkSelectorV1ComponentLabels;
export interface InkSelectorV1ComponentLabelsSchema extends _InkSelectorV1ComponentLabelsSchema {}
export const InkSelectorV1ComponentLabels: InkSelectorV1ComponentLabelsSchema =
  _InkSelectorV1ComponentLabels;
export type InkSelectorV1ComponentLabels = z.infer<
  typeof InkSelectorV1ComponentLabels
>;
