import { z } from "zod";
declare const _WorkspaceTag: z.ZodEnum<{
    autoSelectWorkspace: "autoSelectWorkspace";
    colorInk: "colorInk";
    disableAutoSave: "disableAutoSave";
    disablePendingDesignsModal: "disablePendingDesignsModal";
    disableReviewModal: "disableReviewModal";
    foil: "foil";
    lockQuantity: "lockQuantity";
    panelWash: "panelWash";
    prepress: "prepress";
    restrictionsAdmin: "restrictionsAdmin";
    whiteInk: "whiteInk";
}>;
type _WorkspaceTagSchema = typeof _WorkspaceTag;
export interface WorkspaceTagSchema extends _WorkspaceTagSchema {
}
/**A behaviour a workspace turns on. panelWash shades every designable panel of a folding template, so whoever is editing the template can see what a customer will be able to design on.*/
export declare const WorkspaceTag: WorkspaceTagSchema;
export type WorkspaceTag = z.infer<typeof WorkspaceTag>;
export {};
//# sourceMappingURL=WorkspaceTag.d.ts.map