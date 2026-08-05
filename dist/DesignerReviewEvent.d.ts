import { z } from "zod";
declare const _DesignerReviewEvent: z.ZodObject<{
    type: z.ZodLiteral<"review">;
    payload: z.ZodObject<{
        product: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        quantity: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>;
type _DesignerReviewEventSchema = typeof _DesignerReviewEvent;
export interface DesignerReviewEventSchema extends _DesignerReviewEventSchema {
}
/**Event emitted when the user proceeds to review their design.*/
export declare const DesignerReviewEvent: DesignerReviewEventSchema;
export type DesignerReviewEvent = z.infer<typeof DesignerReviewEvent>;
export {};
//# sourceMappingURL=DesignerReviewEvent.d.ts.map