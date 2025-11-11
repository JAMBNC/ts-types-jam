import { z } from "zod/v4";
export declare const AttributeRenderPreference: z.ZodEnum<{
    swatches: "swatches";
    tabs: "tabs";
    dropdown: "dropdown";
    textSwatches: "textSwatches";
    modal: "modal";
}>;
export type AttributeRenderPreference = z.infer<typeof AttributeRenderPreference>;
//# sourceMappingURL=AttributeRenderPreference.d.ts.map