import { z } from "zod";
declare const _Path: z.ZodObject<{
    closed: z.ZodBoolean;
    points: z.ZodRecord<z.ZodString, import("./Point.js").PointSchema>;
    pointsOrdered: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
type _PathSchema = typeof _Path;
export interface PathSchema extends _PathSchema {
}
/**A vector path consisting of ordered control points.*/
export declare const Path: PathSchema;
export type Path = z.infer<typeof Path>;
export {};
//# sourceMappingURL=Path.d.ts.map