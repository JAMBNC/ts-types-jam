import { z } from "zod";
export declare const DesignerDesignSavedTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_design_saved">;
    payload: z.ZodObject<{
        designId: z.ZodString;
        snapshots: z.ZodArray<z.ZodObject<{
            url: z.ZodString;
            label: z.ZodString;
        }, z.core.$strict>>;
        designReturnUrl: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerDesignSavedTrackingEvent = z.infer<typeof DesignerDesignSavedTrackingEvent>;
//# sourceMappingURL=DesignerDesignSavedTrackingEvent.d.ts.map