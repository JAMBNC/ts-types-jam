import { z } from "zod";
import { PaletteAllowlistItem } from "./PaletteAllowlistItem.js";
import { ProcessAllowlistItem } from "./ProcessAllowlistItem.js";
import { WorkspaceTag } from "./WorkspaceTag.js";
export const Workspace = z
    .object({
    /**Workspace tags for triggering very specific logic or triggering built-in expansions to a minified workspace.*/
    tags: z
        .array(WorkspaceTag)
        .describe("Workspace tags for triggering very specific logic or triggering built-in expansions to a minified workspace.")
        .optional(),
    allowlists: z
        .object({
        processes: z.array(ProcessAllowlistItem).optional(),
        palettes: z.array(PaletteAllowlistItem).optional(),
    })
        .strict()
        .optional(),
})
    .strict();
