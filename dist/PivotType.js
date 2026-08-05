import { z } from "zod";
const _PivotType = z.enum(["primary", "secondary"]);
export const PivotType = _PivotType;
