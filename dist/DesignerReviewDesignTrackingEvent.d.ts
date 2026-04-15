import { z } from "zod";
export declare const DesignerReviewDesignTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_review_design">;
    payload: z.ZodRecord<z.ZodString, z.ZodNever>;
}, z.core.$strict>;
export type DesignerReviewDesignTrackingEvent = z.infer<typeof DesignerReviewDesignTrackingEvent>;
//# sourceMappingURL=DesignerReviewDesignTrackingEvent.d.ts.map