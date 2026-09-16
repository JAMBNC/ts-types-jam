import { z } from "zod";
const _WorkspaceTag = z.enum([
    "foil",
    "whiteInk",
    "colorInk",
    "prepress",
    "disableAutoSave",
    "disableReviewModal",
    "disablePendingDesignsModal",
]);
export const WorkspaceTag = _WorkspaceTag;
