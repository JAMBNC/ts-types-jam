import { z } from "zod";
declare const _DesignView: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    width: z.ZodOptional<import("./Dimension.js").DimensionSchema>;
    height: z.ZodOptional<import("./Dimension.js").DimensionSchema>;
    state: z.ZodOptional<z.ZodString>;
    camera: z.ZodOptional<import("./DesignFace.js").DesignFaceSchema>;
    roll: z.ZodOptional<z.ZodNumber>;
    upright: z.ZodOptional<z.ZodBoolean>;
    preview: z.ZodOptional<z.ZodBoolean>;
    remainder: z.ZodOptional<z.ZodBoolean>;
    placements: z.ZodArray<import("./DesignPanelPlacement.js").DesignPanelPlacementSchema>;
}, z.core.$strict>;
type _DesignViewSchema = typeof _DesignView;
export interface DesignViewSchema extends _DesignViewSchema {
}
/**An assembled face the customer designs on, such as a front cover or an inside spread. A view is a page, bound by Page.view.*/
export declare const DesignView: DesignViewSchema;
export type DesignView = z.infer<typeof DesignView>;
export {};
//# sourceMappingURL=DesignView.d.ts.map