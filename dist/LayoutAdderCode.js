import { z } from "zod";
const _LayoutAdderCode = z.enum([
    "orientation_portrait",
    "orientation_landscape",
]);
export const LayoutAdderCode = _LayoutAdderCode;
