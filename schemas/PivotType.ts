import { z } from "zod";

export const PivotType = z.enum(["primary", "secondary"]);
export type PivotType = z.infer<typeof PivotType>;
