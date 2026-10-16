import { z } from "zod";
declare const _DesignPanelRename: z.ZodObject<{
    panelId: z.ZodString;
    name: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
type _DesignPanelRenameSchema = typeof _DesignPanelRename;
export interface DesignPanelRenameSchema extends _DesignPanelRenameSchema {
}
/**Prepress renamed a panel.*/
export declare const DesignPanelRename: DesignPanelRenameSchema;
export type DesignPanelRename = z.infer<typeof DesignPanelRename>;
export {};
//# sourceMappingURL=DesignPanelRename.d.ts.map