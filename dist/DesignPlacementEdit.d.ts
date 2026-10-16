import { z } from "zod";
declare const _DesignPlacementEdit: z.ZodObject<{
    view: z.ZodString;
    panelId: z.ZodString;
    placement: import("./DesignPlacement.js").DesignPlacementSchema;
}, z.core.$strict>;
type _DesignPlacementEditSchema = typeof _DesignPlacementEdit;
export interface DesignPlacementEditSchema extends _DesignPlacementEditSchema {
}
/**Prepress moved a panel in a view: the placement that replaces the panel's, or joins the view when the panel had none there.*/
export declare const DesignPlacementEdit: DesignPlacementEditSchema;
export type DesignPlacementEdit = z.infer<typeof DesignPlacementEdit>;
export {};
//# sourceMappingURL=DesignPlacementEdit.d.ts.map