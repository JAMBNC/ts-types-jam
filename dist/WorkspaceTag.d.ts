import { z } from "zod";
declare const _WorkspaceTag: z.ZodEnum<{
    autoSelectWorkspace: "autoSelectWorkspace";
    colorInk: "colorInk";
    disableAutoSave: "disableAutoSave";
    disablePendingDesignsModal: "disablePendingDesignsModal";
    disableReviewModal: "disableReviewModal";
    foil: "foil";
    lockQuantity: "lockQuantity";
    panelSnapping: "panelSnapping";
    panelWash: "panelWash";
    prepress: "prepress";
    restrictionLock: "restrictionLock";
    restrictionsAdmin: "restrictionsAdmin";
    whiteInk: "whiteInk";
}>;
type _WorkspaceTagSchema = typeof _WorkspaceTag;
export interface WorkspaceTagSchema extends _WorkspaceTagSchema {
}
/**A behaviour a workspace turns on. panelWash shades every designable panel of a folding template, so whoever is editing the template can see what a customer will be able to design on. restrictionLock puts a lock on a restricted ingredient's floating menu that lists its restrictions on hover, so whoever is editing a template or starter can see what a customer won't be able to change. panelSnapping snaps dragged art to the centre and safe edges of each designable panel on the page, not only to the page's own centre, so art lines up on one inside panel of a folder instead of across its spine.*/
export declare const WorkspaceTag: WorkspaceTagSchema;
export type WorkspaceTag = z.infer<typeof WorkspaceTag>;
export {};
//# sourceMappingURL=WorkspaceTag.d.ts.map