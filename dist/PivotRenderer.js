import { z } from "zod/v4";
export const PivotRenderer = z.enum(["tabs", "dropdown", "swatches", "modal"]);
