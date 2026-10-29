import { z } from "zod";
declare const _DesignerImageWhiteBackground: z.ZodEnum<{
    kept: "kept";
    removed: "removed";
}>;
type _DesignerImageWhiteBackgroundSchema = typeof _DesignerImageWhiteBackground;
export interface DesignerImageWhiteBackgroundSchema extends _DesignerImageWhiteBackgroundSchema {
}
/**What happened to the white background fusion found on a raster: removed (the default) or kept because the customer asked for it. A rendition reports it, and a placed image stores it as metadata.background.*/
export declare const DesignerImageWhiteBackground: DesignerImageWhiteBackgroundSchema;
export type DesignerImageWhiteBackground = z.infer<typeof DesignerImageWhiteBackground>;
export {};
//# sourceMappingURL=DesignerImageWhiteBackground.d.ts.map