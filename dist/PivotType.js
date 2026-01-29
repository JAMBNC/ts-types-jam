import { z } from "zod";
export const PivotType = z.enum(["primary", "secondary"]);
