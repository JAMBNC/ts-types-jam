import { z } from "zod";
declare const _DesignInterpretation: z.ZodObject<{
    width: z.ZodOptional<import("./Dimension.js").DimensionSchema>;
    height: z.ZodOptional<import("./Dimension.js").DimensionSchema>;
    cutPath: z.ZodOptional<import("./Path.js").PathSchema>;
    cutPathSource: z.ZodOptional<import("./DesignCutPathSource.js").DesignCutPathSourceSchema>;
    cutPathBridges: z.ZodOptional<z.ZodArray<import("./DesignCutPathBridge.js").DesignCutPathBridgeSchema>>;
    cutPathOpenEnds: z.ZodOptional<z.ZodArray<import("./DesignCutPathEnd.js").DesignCutPathEndSchema>>;
    dieOrigin: z.ZodOptional<import("./DesignDieOrigin.js").DesignDieOriginSchema>;
    folds: z.ZodOptional<z.ZodArray<import("./DesignFold.js").DesignFoldSchema>>;
    panels: z.ZodOptional<z.ZodArray<import("./DesignPanel.js").DesignPanelSchema>>;
    regions: z.ZodOptional<z.ZodArray<import("./DesignRegion.js").DesignRegionSchema>>;
    optionalCuts: z.ZodOptional<z.ZodArray<import("./DesignOptionalCut.js").DesignOptionalCutSchema>>;
    anchors: z.ZodOptional<z.ZodArray<import("./DesignAnchor.js").DesignAnchorSchema>>;
    folding: z.ZodOptional<import("./DesignFolding.js").DesignFoldingSchema>;
    views: z.ZodArray<import("./DesignView.js").DesignViewSchema>;
    printForm: z.ZodOptional<import("./DesignPrintForm.js").DesignPrintFormSchema>;
    inkDictionary: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    provenance: z.ZodOptional<import("./DesignProvenance.js").DesignProvenanceSchema>;
    preflight: z.ZodOptional<z.ZodArray<import("./DesignFinding.js").DesignFindingSchema>>;
}, z.core.$strict>;
type _DesignInterpretationSchema = typeof _DesignInterpretation;
export interface DesignInterpretationSchema extends _DesignInterpretationSchema {
}
/**The non-derivable half of a template: which regions are views, fold direction and order, region roles, and what a vendor's separation names mean.*/
export declare const DesignInterpretation: DesignInterpretationSchema;
export type DesignInterpretation = z.infer<typeof DesignInterpretation>;
export {};
//# sourceMappingURL=DesignInterpretation.d.ts.map