import { z } from "zod";
export const LayoutAdderCode = z.enum([
    "orientation_portrait",
    "orientation_landscape",
]);
