import { z } from "zod";
export const ViewLayer = z.enum(["background", "bleed", "mask", "print"]);
