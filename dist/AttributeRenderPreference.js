import { z } from "zod/v4";
export const AttributeRenderPreference = z.enum([
    "tabs",
    "dropdown",
    "swatches",
    "modal",
]);
