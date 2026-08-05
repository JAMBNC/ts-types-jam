import { z } from "zod";
const _Tag = z.enum([
    "primary",
    "small",
    "thumbnail",
    "yourLogoHere",
    "insideView",
    "swatch",
    "amazon",
    "carousel",
    "other",
]);
export const Tag = _Tag;
