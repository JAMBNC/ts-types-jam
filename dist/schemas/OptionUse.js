import { z } from "zod";
export const OptionUse = z.enum(["none", "selected", "all"]);
