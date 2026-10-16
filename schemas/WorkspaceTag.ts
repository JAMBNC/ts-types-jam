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
    "restrictionLock",
  ])
  .describe(
    "A behaviour a workspace turns on. panelWash shades every designable panel of a folding template, so whoever is editing the template can see what a customer will be able to design on. restrictionLock puts a lock on a restricted ingredient's floating menu that lists its restrictions on hover, so whoever is editing a template or starter can see what a customer won't be able to change.",
  );
type _WorkspaceTagSchema = typeof _WorkspaceTag;
export interface WorkspaceTagSchema extends _WorkspaceTagSchema {}
/**A behaviour a workspace turns on. panelWash shades every designable panel of a folding template, so whoever is editing the template can see what a customer will be able to design on. restrictionLock puts a lock on a restricted ingredient's floating menu that lists its restrictions on hover, so whoever is editing a template or starter can see what a customer won't be able to change.*/
export const WorkspaceTag: WorkspaceTagSchema = _WorkspaceTag;
export type WorkspaceTag = z.infer<typeof WorkspaceTag>;
