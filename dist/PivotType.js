import { z } from "zod/v4";
export const PivotType = z.enum(["primary", "secondary"]);
