import { z } from "zod";
declare const _WorkspaceTag: z.ZodEnum<{
    colorInk: "colorInk";
    foil: "foil";
    whiteInk: "whiteInk";
}>;
type _WorkspaceTagSchema = typeof _WorkspaceTag;
export interface WorkspaceTagSchema extends _WorkspaceTagSchema {
}
export declare const WorkspaceTag: WorkspaceTagSchema;
export type WorkspaceTag = z.infer<typeof WorkspaceTag>;
export {};
//# sourceMappingURL=WorkspaceTag.d.ts.map