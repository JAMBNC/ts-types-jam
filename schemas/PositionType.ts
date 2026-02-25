import { z } from "zod";

export const PositionType = z.enum(["relative", "absolute"]);
export type PositionType = z.infer<typeof PositionType>;
