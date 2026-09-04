import { z } from "zod";
declare const _DesignerDesignSavedTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_design_saved">;
    payload: z.ZodObject<{
        designUuid: z.ZodString;
        snapshots: z.ZodArray<z.ZodObject<{
            url: z.ZodString;
            label: z.ZodString;
        }, z.core.$strict>>;
        designPreviewImage: z.ZodString;
        designReturnUrl: z.ZodString;
        designer: import("./DesignerCode.js").DesignerCodeSchema;
        partner: z.ZodString;
        channel: z.ZodString;
        deltaTime: import("./DeltaTime.js").DeltaTimeSchema;
    }, z.core.$strict>;
}, z.core.$strict>;
type _DesignerDesignSavedTrackingEventSchema = typeof _DesignerDesignSavedTrackingEvent;
export interface DesignerDesignSavedTrackingEventSchema extends _DesignerDesignSavedTrackingEventSchema {
}
export declare const DesignerDesignSavedTrackingEvent: DesignerDesignSavedTrackingEventSchema;
export type DesignerDesignSavedTrackingEvent = z.infer<typeof DesignerDesignSavedTrackingEvent>;
export {};
//# sourceMappingURL=DesignerDesignSavedTrackingEvent.d.ts.map