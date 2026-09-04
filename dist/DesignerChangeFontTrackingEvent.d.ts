import { z } from "zod";
declare const _DesignerChangeFontTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_change_font">;
    payload: z.ZodObject<{
        type: z.ZodOptional<z.ZodUnion<readonly [import("./IngredientMetadataType.js").IngredientMetadataTypeSchema, z.ZodNull]>>;
        oldFont: z.ZodString;
        newFont: z.ZodString;
        designer: import("./DesignerCode.js").DesignerCodeSchema;
        partner: z.ZodString;
        channel: z.ZodString;
        deltaTime: import("./DeltaTime.js").DeltaTimeSchema;
    }, z.core.$strict>;
}, z.core.$strict>;
type _DesignerChangeFontTrackingEventSchema = typeof _DesignerChangeFontTrackingEvent;
export interface DesignerChangeFontTrackingEventSchema extends _DesignerChangeFontTrackingEventSchema {
}
export declare const DesignerChangeFontTrackingEvent: DesignerChangeFontTrackingEventSchema;
export type DesignerChangeFontTrackingEvent = z.infer<typeof DesignerChangeFontTrackingEvent>;
export {};
//# sourceMappingURL=DesignerChangeFontTrackingEvent.d.ts.map