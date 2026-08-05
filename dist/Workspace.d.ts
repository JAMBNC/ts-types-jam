import { z } from "zod";
declare const _Workspace: z.ZodObject<{
    tags: z.ZodOptional<z.ZodArray<import("./WorkspaceTag.js").WorkspaceTagSchema>>;
    allowlists: z.ZodOptional<z.ZodObject<{
        processes: z.ZodOptional<z.ZodArray<import("./ProcessAllowlistItem.js").ProcessAllowlistItemSchema>>;
        palettes: z.ZodOptional<z.ZodArray<import("./PaletteAllowlistItem.js").PaletteAllowlistItemSchema>>;
    }, z.core.$strict>>;
}, z.core.$strict>;
type _WorkspaceSchema = typeof _Workspace;
export interface WorkspaceSchema extends _WorkspaceSchema {
}
export declare const Workspace: WorkspaceSchema;
export type Workspace = z.infer<typeof Workspace>;
export {};
//# sourceMappingURL=Workspace.d.ts.map