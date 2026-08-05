import { z } from "zod";
const _OptionUse = z.enum(["none", "selected", "all"]);
export const OptionUse = _OptionUse;
