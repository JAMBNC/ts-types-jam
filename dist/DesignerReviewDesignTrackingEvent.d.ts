import { z } from "zod";
declare const _DesignerReviewDesignTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_review_design">;
    payload: z.ZodObject<{
        productUrl: z.ZodOptional<z.ZodString>;
        designer: import("./DesignerCode.js").DesignerCodeSchema;
        partner: z.ZodString;
        channel: z.ZodString;
        deltaTime: import("./DeltaTime.js").DeltaTimeSchema;
        productSku: z.ZodString;
        quantity: z.ZodNumber;
        price: z.ZodNumber;
        adders: z.ZodArray<import("./AdderCodeEnum.js").AdderCodeEnumSchema>;
        snapshots: z.ZodOptional<z.ZodArray<z.ZodObject<{
            url: z.ZodString;
            label: z.ZodString;
        }, z.core.$strict>>>;
        designPreviewImage: z.ZodOptional<z.ZodString>;
        designReturnUrl: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strict>;
type _DesignerReviewDesignTrackingEventSchema = typeof _DesignerReviewDesignTrackingEvent;
export interface DesignerReviewDesignTrackingEventSchema extends _DesignerReviewDesignTrackingEventSchema {
}
export declare const DesignerReviewDesignTrackingEvent: DesignerReviewDesignTrackingEventSchema;
export type DesignerReviewDesignTrackingEvent = z.infer<typeof DesignerReviewDesignTrackingEvent>;
export {};
//# sourceMappingURL=DesignerReviewDesignTrackingEvent.d.ts.map