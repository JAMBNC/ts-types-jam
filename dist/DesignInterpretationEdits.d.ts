import { z } from "zod";
declare const _DesignInterpretationEdits: z.ZodObject<{
    placements: z.ZodOptional<z.ZodArray<import("./DesignPlacementEdit.js").DesignPlacementEditSchema>>;
    anchors: z.ZodOptional<z.ZodArray<import("./DesignAnchorEdit.js").DesignAnchorEditSchema>>;
    regions: z.ZodOptional<z.ZodArray<import("./DesignRegionEdit.js").DesignRegionEditSchema>>;
    renames: z.ZodOptional<z.ZodArray<import("./DesignPanelRename.js").DesignPanelRenameSchema>>;
    fold: z.ZodOptional<import("./DesignFoldEdit.js").DesignFoldEditSchema>;
}, z.core.$strict>;
type _DesignInterpretationEditsSchema = typeof _DesignInterpretationEdits;
export interface DesignInterpretationEditsSchema extends _DesignInterpretationEditsSchema {
}
/**Every edit prepress made to an interpretation in one designer session, kept beside the design rather than in it. Hermes publishes it, the host files it with the next version, and the fold engine refolds under it. An absent list means no edits of that kind.*/
export declare const DesignInterpretationEdits: DesignInterpretationEditsSchema;
export type DesignInterpretationEdits = z.infer<typeof DesignInterpretationEdits>;
export {};
//# sourceMappingURL=DesignInterpretationEdits.d.ts.map