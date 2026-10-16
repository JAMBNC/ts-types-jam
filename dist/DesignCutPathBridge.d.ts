import { z } from "zod";
declare const _DesignCutPathBridge: z.ZodObject<{
    x0: import("./Dimension.js").DimensionSchema;
    y0: import("./Dimension.js").DimensionSchema;
    x1: import("./Dimension.js").DimensionSchema;
    y1: import("./Dimension.js").DimensionSchema;
}, z.core.$strict>;
type _DesignCutPathBridgeSchema = typeof _DesignCutPathBridge;
export interface DesignCutPathBridgeSchema extends _DesignCutPathBridgeSchema {
}
/**One gap tracing closed: a straight segment from (x0, y0) to (x1, y1) on the flat sheet.*/
export declare const DesignCutPathBridge: DesignCutPathBridgeSchema;
export type DesignCutPathBridge = z.infer<typeof DesignCutPathBridge>;
export {};
//# sourceMappingURL=DesignCutPathBridge.d.ts.map