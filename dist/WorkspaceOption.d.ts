import { z } from "zod";
declare const _WorkspaceOption: z.ZodObject<{
    uuid: z.ZodString;
    workspace: import("./Workspace.js").WorkspaceSchema;
    label: z.ZodString;
    description: z.ZodString;
    bannerUrl: z.ZodString;
}, z.core.$strict>;
type _WorkspaceOptionSchema = typeof _WorkspaceOption;
export interface WorkspaceOptionSchema extends _WorkspaceOptionSchema {
}
export declare const WorkspaceOption: WorkspaceOptionSchema;
export type WorkspaceOption = z.infer<typeof WorkspaceOption>;
export {};
//# sourceMappingURL=WorkspaceOption.d.ts.map