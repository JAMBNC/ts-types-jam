import { z } from "zod";

export const AttributeRenderPreference = z.enum([
  "tabs",
  "dropdown",
  "swatches",
  "modal",
]);
export type AttributeRenderPreference = z.infer<
  typeof AttributeRenderPreference
>;
