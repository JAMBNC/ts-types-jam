import { z } from "zod";
const _WorkspaceTag = z.enum([
    "foil",
    "whiteInk",
    "colorInk",
    "prepress",
    "disableAutoSave",
    "disableReviewModal",
]);
export const WorkspaceTag = _WorkspaceTag;
