import { z } from "zod";
declare const _DesignerAuth: z.ZodObject<{
    endpointAuth: import("./Auth.js").AuthSchema;
}, z.core.$strict>;
type _DesignerAuthSchema = typeof _DesignerAuth;
export interface DesignerAuthSchema extends _DesignerAuthSchema {
}
export declare const DesignerAuth: DesignerAuthSchema;
export type DesignerAuth = z.infer<typeof DesignerAuth>;
export {};
//# sourceMappingURL=DesignerAuth.d.ts.map