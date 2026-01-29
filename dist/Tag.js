import { z } from "zod";
export const Tag = z.enum([
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
