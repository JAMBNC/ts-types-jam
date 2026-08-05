import { z } from "zod";
const _WorkspaceTag = z.enum(["foil", "whiteInk", "colorInk"]);
export const WorkspaceTag = _WorkspaceTag;
