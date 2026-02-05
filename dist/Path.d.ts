import { z } from "zod";
/**A vector path consisting of ordered control points.*/
export declare const Path: z.ZodObject<{
    isClosed: z.ZodString;
    points: z.ZodRecord<z.core.$ZodRecordKey, z.core.SomeType>;
    pointsOrdered: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type Path = z.infer<typeof Path>;
//# sourceMappingURL=Path.d.ts.map