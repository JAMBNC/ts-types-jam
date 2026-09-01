import { z } from "zod";
declare const _DesignerSaveRequest: z.ZodObject<{
    design: import("./DesignState.js").DesignStateSchema;
    encodedSnapshots: z.ZodOptional<z.ZodString>;
    config: z.ZodOptional<z.ZodString>;
    preflight: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
type _DesignerSaveRequestSchema = typeof _DesignerSaveRequest;
export interface DesignerSaveRequestSchema extends _DesignerSaveRequestSchema {
}
/**The request payload for the design save endpoint.*/
export declare const DesignerSaveRequest: DesignerSaveRequestSchema;
export type DesignerSaveRequest = z.infer<typeof DesignerSaveRequest>;
export {};
//# sourceMappingURL=DesignerSaveRequest.d.ts.map