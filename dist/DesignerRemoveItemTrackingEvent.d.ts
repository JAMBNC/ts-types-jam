import { z } from "zod";
declare const _DesignerRemoveItemTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_remove_item">;
    payload: z.ZodObject<{
        type: z.ZodOptional<z.ZodUnion<readonly [import("./IngredientMetadataType.js").IngredientMetadataTypeSchema, z.ZodNull]>>;
        designer: import("./DesignerCode.js").DesignerCodeSchema;
        merchant: import("./MerchantCode.js").MerchantCodeSchema;
        deltaTime: import("./DeltaTime.js").DeltaTimeSchema;
    }, z.core.$strict>;
}, z.core.$strict>;
type _DesignerRemoveItemTrackingEventSchema = typeof _DesignerRemoveItemTrackingEvent;
export interface DesignerRemoveItemTrackingEventSchema extends _DesignerRemoveItemTrackingEventSchema {
}
export declare const DesignerRemoveItemTrackingEvent: DesignerRemoveItemTrackingEventSchema;
export type DesignerRemoveItemTrackingEvent = z.infer<typeof DesignerRemoveItemTrackingEvent>;
export {};
//# sourceMappingURL=DesignerRemoveItemTrackingEvent.d.ts.map