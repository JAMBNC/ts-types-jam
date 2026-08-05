import { z } from "zod";
declare const _LinePoint: z.ZodObject<{
    type: z.ZodLiteral<"line">;
    ix: import("./Dimension.js").DimensionSchema;
    iy: import("./Dimension.js").DimensionSchema;
    ox: import("./Dimension.js").DimensionSchema;
    oy: import("./Dimension.js").DimensionSchema;
    x: import("./Dimension.js").DimensionSchema;
    y: import("./Dimension.js").DimensionSchema;
}, z.core.$strict>;
type _LinePointSchema = typeof _LinePoint;
export interface LinePointSchema extends _LinePointSchema {
}
/**A straight line control point with in-handle, out-handle, and anchor position.*/
export declare const LinePoint: LinePointSchema;
export type LinePoint = z.infer<typeof LinePoint>;
export {};
//# sourceMappingURL=LinePoint.d.ts.map