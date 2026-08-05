import { z } from "zod";
const _Alignment = z.enum(["left", "center", "right"]);
export const Alignment = _Alignment;
