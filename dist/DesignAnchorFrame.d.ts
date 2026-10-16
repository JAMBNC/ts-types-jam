import { z } from "zod";
declare const _DesignAnchorFrame: z.ZodObject<{
    x: import("./Dimension.js").DimensionSchema;
    y: import("./Dimension.js").DimensionSchema;
    width: import("./Dimension.js").DimensionSchema;
    height: import("./Dimension.js").DimensionSchema;
    rotation: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
type _DesignAnchorFrameSchema = typeof _DesignAnchorFrame;
export interface DesignAnchorFrameSchema extends _DesignAnchorFrameSchema {
}
/**The anchor's reference box on the flat sheet. A placement rule insets from the span; the rotation turns the fixture to read upright in the anchor's home view. A point fixture has a zero span, a line fixture a zero height.*/
export declare const DesignAnchorFrame: DesignAnchorFrameSchema;
export type DesignAnchorFrame = z.infer<typeof DesignAnchorFrame>;
export {};
//# sourceMappingURL=DesignAnchorFrame.d.ts.map