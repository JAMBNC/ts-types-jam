import { z } from "zod";
export declare const DesignerReviewDesignTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_review_design">;
    payload: z.ZodObject<{
        designer: z.ZodEnum<{
            base: "base";
            hermes: "hermes";
        }>;
        merchant: z.ZodString;
        deltaTime: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerReviewDesignTrackingEvent = z.infer<typeof DesignerReviewDesignTrackingEvent>;
//# sourceMappingURL=DesignerReviewDesignTrackingEvent.d.ts.map