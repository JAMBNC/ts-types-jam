import { z } from "zod";
const _AttributeRenderPreference = z.enum([
    "tabs",
    "dropdown",
    "swatches",
    "modal",
]);
export const AttributeRenderPreference = _AttributeRenderPreference;
