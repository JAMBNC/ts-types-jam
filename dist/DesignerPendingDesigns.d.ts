import { z } from "zod";
declare const _DesignerPendingDesigns: z.ZodArray<z.ZodObject<{
    designPreviewImage: z.ZodString;
    label: z.ZodString;
    snapshots: z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        label: z.ZodString;
    }, z.core.$strict>>;
    uuid: z.ZodString;
    status: z.ZodString;
}, z.core.$loose>>;
type _DesignerPendingDesignsSchema = typeof _DesignerPendingDesigns;
export interface DesignerPendingDesignsSchema extends _DesignerPendingDesignsSchema {
}
export declare const DesignerPendingDesigns: DesignerPendingDesignsSchema;
export type DesignerPendingDesigns = z.infer<typeof DesignerPendingDesigns>;
export {};
//# sourceMappingURL=DesignerPendingDesigns.d.ts.map