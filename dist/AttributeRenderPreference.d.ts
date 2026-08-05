import { z } from "zod";
declare const _AttributeRenderPreference: z.ZodEnum<{
    dropdown: "dropdown";
    modal: "modal";
    swatches: "swatches";
    tabs: "tabs";
}>;
type _AttributeRenderPreferenceSchema = typeof _AttributeRenderPreference;
export interface AttributeRenderPreferenceSchema extends _AttributeRenderPreferenceSchema {
}
export declare const AttributeRenderPreference: AttributeRenderPreferenceSchema;
export type AttributeRenderPreference = z.infer<typeof AttributeRenderPreference>;
export {};
//# sourceMappingURL=AttributeRenderPreference.d.ts.map