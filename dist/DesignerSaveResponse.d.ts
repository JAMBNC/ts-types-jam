import { z } from "zod";
declare const _DesignerSaveResponse: z.ZodObject<{
    success: z.ZodBoolean;
    designUuid: z.ZodString;
    snapshots: z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        label: z.ZodString;
    }, z.core.$strict>>;
    designPreviewImage: z.ZodString;
}, z.core.$strict>;
type _DesignerSaveResponseSchema = typeof _DesignerSaveResponse;
export interface DesignerSaveResponseSchema extends _DesignerSaveResponseSchema {
}
/**The response from the design save endpoint.*/
export declare const DesignerSaveResponse: DesignerSaveResponseSchema;
export type DesignerSaveResponse = z.infer<typeof DesignerSaveResponse>;
export {};
//# sourceMappingURL=DesignerSaveResponse.d.ts.map