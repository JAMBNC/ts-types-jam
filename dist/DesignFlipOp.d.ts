import { z } from "zod";
declare const _DesignFlipOp: z.ZodObject<{
    op: z.ZodLiteral<"flip">;
    axis: import("./DesignAxis.js").DesignAxisSchema;
    coord: import("./Dimension.js").DimensionSchema;
}, z.core.$strict>;
type _DesignFlipOpSchema = typeof _DesignFlipOp;
export interface DesignFlipOpSchema extends _DesignFlipOpSchema {
}
/**Mirror the panel across an axis-aligned line, for an assembly that turns a panel over independently of a crease. Unlike a reflect, its line is stated here rather than read from a fold.*/
export declare const DesignFlipOp: DesignFlipOpSchema;
export type DesignFlipOp = z.infer<typeof DesignFlipOp>;
export {};
//# sourceMappingURL=DesignFlipOp.d.ts.map