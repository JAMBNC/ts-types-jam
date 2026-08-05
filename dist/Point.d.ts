import { z } from "zod";
declare const _Point: z.ZodDiscriminatedUnion<[import("./BezierPoint.js").BezierPointSchema, import("./LinePoint.js").LinePointSchema]>;
type _PointSchema = typeof _Point;
export interface PointSchema extends _PointSchema {
}
/**A discriminated union of path point types.*/
export declare const Point: PointSchema;
export type Point = z.infer<typeof Point>;
export {};
//# sourceMappingURL=Point.d.ts.map