import { z } from "zod";
declare const _DesignCutPathEnd: z.ZodObject<{
    x: import("./Dimension.js").DimensionSchema;
    y: import("./Dimension.js").DimensionSchema;
}, z.core.$strict>;
type _DesignCutPathEndSchema = typeof _DesignCutPathEnd;
export interface DesignCutPathEndSchema extends _DesignCutPathEndSchema {
}
/**A point on the flat sheet where a knife stroke stops without meeting another.*/
export declare const DesignCutPathEnd: DesignCutPathEndSchema;
export type DesignCutPathEnd = z.infer<typeof DesignCutPathEnd>;
export {};
//# sourceMappingURL=DesignCutPathEnd.d.ts.map