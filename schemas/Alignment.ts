import { z } from "zod";

export const Alignment = z.enum(["left", "center", "right"]);
export type Alignment = z.infer<typeof Alignment>;
