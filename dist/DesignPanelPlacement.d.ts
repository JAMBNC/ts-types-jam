import { z } from "zod";
declare const _DesignPanelPlacement: z.ZodObject<{
    panelId: z.ZodString;
    face: z.ZodOptional<import("./DesignFace.js").DesignFaceSchema>;
    z: z.ZodOptional<z.ZodNumber>;
    placement: import("./DesignPlacement.js").DesignPlacementSchema;
}, z.core.$strict>;
type _DesignPanelPlacementSchema = typeof _DesignPanelPlacement;
export interface DesignPanelPlacementSchema extends _DesignPanelPlacementSchema {
}
/**One panel positioned inside a view.*/
export declare const DesignPanelPlacement: DesignPanelPlacementSchema;
export type DesignPanelPlacement = z.infer<typeof DesignPanelPlacement>;
export {};
//# sourceMappingURL=DesignPanelPlacement.d.ts.map