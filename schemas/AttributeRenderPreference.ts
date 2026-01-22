import { z } from "zod/v4";

export const AttributeRenderPreference = z.enum([
  "tabs",
  "dropdown",
  "swatches",
  "modal",
]);
export type AttributeRenderPreference = z.infer<
  typeof AttributeRenderPreference
>;
