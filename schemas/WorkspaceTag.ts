import { z } from "zod";

const _WorkspaceTag = z.enum([
  "foil",
  "whiteInk",
  "colorInk",
  "prepress",
  "disableAutoSave",
  "disableReviewModal",
]);
type _WorkspaceTagSchema = typeof _WorkspaceTag;
export interface WorkspaceTagSchema extends _WorkspaceTagSchema {}
export const WorkspaceTag: WorkspaceTagSchema = _WorkspaceTag;
export type WorkspaceTag = z.infer<typeof WorkspaceTag>;
