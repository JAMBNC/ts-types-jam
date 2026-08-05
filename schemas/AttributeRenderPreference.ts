import { z } from "zod";

const _AttributeRenderPreference = z.enum([
  "tabs",
  "dropdown",
  "swatches",
  "modal",
]);
type _AttributeRenderPreferenceSchema = typeof _AttributeRenderPreference;
export interface AttributeRenderPreferenceSchema extends _AttributeRenderPreferenceSchema {}
export const AttributeRenderPreference: AttributeRenderPreferenceSchema =
  _AttributeRenderPreference;
export type AttributeRenderPreference = z.infer<
  typeof AttributeRenderPreference
>;
