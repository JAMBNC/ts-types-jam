import { z } from "zod";
import { BezierPoint } from "./BezierPoint.js";
import { LinePoint } from "./LinePoint.js";

const _Point = z
  .discriminatedUnion("type", [BezierPoint, LinePoint])
  .describe("A discriminated union of path point types.");
type _PointSchema = typeof _Point;
export interface PointSchema extends _PointSchema {}
/**A discriminated union of path point types.*/
export const Point: PointSchema = _Point;
export type Point = z.infer<typeof Point>;
