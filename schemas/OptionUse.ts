import { z } from "zod";

export const OptionUse = z.enum(["none", "selected", "all"]);
export type OptionUse = z.infer<typeof OptionUse>;
