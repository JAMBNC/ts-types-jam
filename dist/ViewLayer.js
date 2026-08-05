import { z } from "zod";
const _ViewLayer = z.enum(["background", "bleed", "mask", "print"]);
export const ViewLayer = _ViewLayer;
