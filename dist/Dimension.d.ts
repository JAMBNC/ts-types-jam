import { z } from "zod";
declare const _Dimension: z.ZodObject<{
    u: import("./Unit.js").UnitSchema;
    v: z.ZodNumber;
}, z.core.$loose>;
type _DimensionSchema = typeof _Dimension;
export interface DimensionSchema extends _DimensionSchema {
}
export declare const Dimension: DimensionSchema;
export type Dimension = z.infer<typeof Dimension>;
export {};
//# sourceMappingURL=Dimension.d.ts.map