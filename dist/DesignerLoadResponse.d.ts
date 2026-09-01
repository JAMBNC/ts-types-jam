import { z } from "zod";
declare const _DesignerLoadResponse: z.ZodObject<{
    design: import("./DesignState.js").DesignStateSchema;
    snapshots: z.ZodOptional<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        label: z.ZodString;
    }, z.core.$strict>>>;
    designPreviewImage: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
type _DesignerLoadResponseSchema = typeof _DesignerLoadResponse;
export interface DesignerLoadResponseSchema extends _DesignerLoadResponseSchema {
}
/**The response from the design load endpoint. If loading a saved design things like id, uuid, snapshots, and previewImage should be populated.*/
export declare const DesignerLoadResponse: DesignerLoadResponseSchema;
export type DesignerLoadResponse = z.infer<typeof DesignerLoadResponse>;
export {};
//# sourceMappingURL=DesignerLoadResponse.d.ts.map