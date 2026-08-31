import { z } from "zod";
declare const _DesignerChangeProcessTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_change_process">;
    payload: z.ZodObject<{
        type: z.ZodOptional<z.ZodUnion<readonly [import("./IngredientMetadataType.js").IngredientMetadataTypeSchema, z.ZodNull]>>;
        oldProcess: z.ZodOptional<z.ZodUnion<readonly [import("./Process.js").ProcessSchema, z.ZodNull]>>;
        newProcess: z.ZodOptional<z.ZodUnion<readonly [import("./Process.js").ProcessSchema, z.ZodNull]>>;
        designer: import("./DesignerCode.js").DesignerCodeSchema;
        merchant: z.ZodAny;
        deltaTime: import("./DeltaTime.js").DeltaTimeSchema;
    }, z.core.$strict>;
}, z.core.$strict>;
type _DesignerChangeProcessTrackingEventSchema = typeof _DesignerChangeProcessTrackingEvent;
export interface DesignerChangeProcessTrackingEventSchema extends _DesignerChangeProcessTrackingEventSchema {
}
export declare const DesignerChangeProcessTrackingEvent: DesignerChangeProcessTrackingEventSchema;
export type DesignerChangeProcessTrackingEvent = z.infer<typeof DesignerChangeProcessTrackingEvent>;
export {};
//# sourceMappingURL=DesignerChangeProcessTrackingEvent.d.ts.map