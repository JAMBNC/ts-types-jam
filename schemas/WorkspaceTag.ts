import { z } from "zod";

export const WorkspaceTag = z.enum(["foil", "whiteInk", "colorInk"]);
export type WorkspaceTag = z.infer<typeof WorkspaceTag>;
