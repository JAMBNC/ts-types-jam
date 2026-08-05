import { z } from "zod";
const _PositionType = z.enum(["relative", "absolute"]);
export const PositionType = _PositionType;
