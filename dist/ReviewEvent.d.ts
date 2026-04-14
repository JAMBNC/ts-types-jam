import { z } from "zod";
/**Event emitted when the user proceeds to review their design.*/
export declare const ReviewEvent: z.ZodObject<{
    type: z.ZodLiteral<"review">;
    payload: z.ZodObject<{
        product: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        quantity: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>;
export type ReviewEvent = z.infer<typeof ReviewEvent>;
//# sourceMappingURL=ReviewEvent.d.ts.map