import { z } from "zod";
declare const _DesignPanel: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    label: z.ZodOptional<z.ZodString>;
    kind: z.ZodOptional<z.ZodString>;
    attachedTo: z.ZodOptional<z.ZodString>;
    path: import("./Path.js").PathSchema;
    designable: z.ZodOptional<z.ZodBoolean>;
    foldIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
type _DesignPanelSchema = typeof _DesignPanel;
export interface DesignPanelSchema extends _DesignPanelSchema {
}
/**One planar face of the folded product.*/
export declare const DesignPanel: DesignPanelSchema;
export type DesignPanel = z.infer<typeof DesignPanel>;
export {};
//# sourceMappingURL=DesignPanel.d.ts.map