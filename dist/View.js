import { z } from "zod";
import { SideView } from "./SideView.js";
export const View = z
    .object({ side1: SideView, side2: SideView, vendor: z.string() })
    .passthrough();
