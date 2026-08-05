import { z } from "zod";
declare const _ViewLayer: z.ZodEnum<{
    background: "background";
    bleed: "bleed";
    mask: "mask";
    print: "print";
}>;
type _ViewLayerSchema = typeof _ViewLayer;
export interface ViewLayerSchema extends _ViewLayerSchema {
}
export declare const ViewLayer: ViewLayerSchema;
export type ViewLayer = z.infer<typeof ViewLayer>;
export {};
//# sourceMappingURL=ViewLayer.d.ts.map