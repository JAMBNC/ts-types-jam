import { z } from "zod";
import { BezierPoint } from "./BezierPoint.js";
import { LinePoint } from "./LinePoint.js";
const _Point = z
    .discriminatedUnion("type", [BezierPoint, LinePoint])
    .describe("A discriminated union of path point types.");
/**A discriminated union of path point types.*/
export const Point = _Point;
