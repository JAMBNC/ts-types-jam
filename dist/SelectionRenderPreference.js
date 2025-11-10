import { z } from "zod/v4";
export const SelectionRenderPreference = z.enum([
    "SELECT",
    "SWATCH",
    "TEXT_SWATCH",
]);
