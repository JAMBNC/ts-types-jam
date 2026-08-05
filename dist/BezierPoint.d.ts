import { z } from "zod";
declare const _BezierPoint: z.ZodObject<{
    type: z.ZodLiteral<"bezier">;
    ix: import("./Dimension.js").DimensionSchema;
    iy: import("./Dimension.js").DimensionSchema;
    ox: import("./Dimension.js").DimensionSchema;
    oy: import("./Dimension.js").DimensionSchema;
    x: import("./Dimension.js").DimensionSchema;
    y: import("./Dimension.js").DimensionSchema;
}, z.core.$strict>;
type _BezierPointSchema = typeof _BezierPoint;
export interface BezierPointSchema extends _BezierPointSchema {
}
/**A bezier curve control point with in-handle, out-handle, and anchor position.*/
export declare const BezierPoint: BezierPointSchema;
export type BezierPoint = z.infer<typeof BezierPoint>;
export {};
//# sourceMappingURL=BezierPoint.d.ts.map