import { z } from "zod";
import { BezierPoint } from "./BezierPoint.js";
import { LinePoint } from "./LinePoint.js";

/**A discriminated union of path point types.*/
export const Point = z
  .discriminatedUnion("type", [BezierPoint, LinePoint])
  .describe("A discriminated union of path point types.");
export type Point = z.infer<typeof Point>;
