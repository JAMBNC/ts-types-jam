import { z } from "zod";
declare const _DesignerChangeQuantityTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_change_quantity">;
    payload: z.ZodObject<{
        type: z.ZodOptional<z.ZodUnion<readonly [import("./IngredientMetadataType.js").IngredientMetadataTypeSchema, z.ZodNull]>>;
        oldQuantity: z.ZodNumber;
        newQuantity: z.ZodNumber;
        designer: import("./DesignerCode.js").DesignerCodeSchema;
        merchant: z.ZodAny;
        deltaTime: import("./DeltaTime.js").DeltaTimeSchema;
    }, z.core.$strict>;
}, z.core.$strict>;
type _DesignerChangeQuantityTrackingEventSchema = typeof _DesignerChangeQuantityTrackingEvent;
export interface DesignerChangeQuantityTrackingEventSchema extends _DesignerChangeQuantityTrackingEventSchema {
}
export declare const DesignerChangeQuantityTrackingEvent: DesignerChangeQuantityTrackingEventSchema;
export type DesignerChangeQuantityTrackingEvent = z.infer<typeof DesignerChangeQuantityTrackingEvent>;
export {};
//# sourceMappingURL=DesignerChangeQuantityTrackingEvent.d.ts.map