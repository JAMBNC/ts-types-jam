import { z } from "zod";
declare const _Rect: z.ZodObject<{
    height: import("./Dimension.js").DimensionSchema;
    width: import("./Dimension.js").DimensionSchema;
    x: import("./Dimension.js").DimensionSchema;
    y: import("./Dimension.js").DimensionSchema;
}, z.core.$strict>;
type _RectSchema = typeof _Rect;
export interface RectSchema extends _RectSchema {
}
/**A positioned rectangle defined by x, y, width, and height measurements.*/
export declare const Rect: RectSchema;
export type Rect = z.infer<typeof Rect>;
export {};
//# sourceMappingURL=Rect.d.ts.map