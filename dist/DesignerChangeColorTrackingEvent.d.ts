import { z } from "zod";
declare const _DesignerChangeColorTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_change_color">;
    payload: z.ZodObject<{
        type: z.ZodOptional<z.ZodUnion<readonly [import("./IngredientMetadataType.js").IngredientMetadataTypeSchema, z.ZodNull]>>;
        oldColors: z.ZodArray<import("./Color.js").ColorSchema>;
        newColors: z.ZodArray<import("./Color.js").ColorSchema>;
        designer: import("./DesignerCode.js").DesignerCodeSchema;
        merchant: import("./MerchantCode.js").MerchantCodeSchema;
        deltaTime: import("./DeltaTime.js").DeltaTimeSchema;
    }, z.core.$strict>;
}, z.core.$strict>;
type _DesignerChangeColorTrackingEventSchema = typeof _DesignerChangeColorTrackingEvent;
export interface DesignerChangeColorTrackingEventSchema extends _DesignerChangeColorTrackingEventSchema {
}
export declare const DesignerChangeColorTrackingEvent: DesignerChangeColorTrackingEventSchema;
export type DesignerChangeColorTrackingEvent = z.infer<typeof DesignerChangeColorTrackingEvent>;
export {};
//# sourceMappingURL=DesignerChangeColorTrackingEvent.d.ts.map