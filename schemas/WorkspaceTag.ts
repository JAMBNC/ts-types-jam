import { z } from "zod";

const _WorkspaceTag = z
  .enum([
    "foil",
    "whiteInk",
    "colorInk",
    "prepress",
    "disableAutoSave",
    "disableReviewModal",
    "disablePendingDesignsModal",
    "lockQuantity",
    "restrictionsAdmin",
    "autoSelectWorkspace",
    "panelWash",
  ])
  .describe(
    "A behaviour a workspace turns on. panelWash shades every designable panel of a folding template, so whoever is editing the template can see what a customer will be able to design on.",
  );
type _WorkspaceTagSchema = typeof _WorkspaceTag;
export interface WorkspaceTagSchema extends _WorkspaceTagSchema {}
/**A behaviour a workspace turns on. panelWash shades every designable panel of a folding template, so whoever is editing the template can see what a customer will be able to design on.*/
export const WorkspaceTag: WorkspaceTagSchema = _WorkspaceTag;
export type WorkspaceTag = z.infer<typeof WorkspaceTag>;
