import { z } from "zod";
export const AttributeRenderPreference = z.enum([
    "tabs",
    "dropdown",
    "swatches",
    "modal",
]);
