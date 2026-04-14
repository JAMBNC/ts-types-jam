import { z } from "zod";
export declare const TrackingEvent_designer_remove_item: z.ZodObject<{
    event: z.ZodLiteral<"designer_remove_item">;
    payload: z.ZodObject<{
        type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            text: "text";
            image: "image";
            sRecipientAddress: "sRecipientAddress";
            recipientAddress: "recipientAddress";
            returnAddress: "returnAddress";
            variableData: "variableData";
        }>, z.ZodNull]>>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type TrackingEvent_designer_remove_item = z.infer<typeof TrackingEvent_designer_remove_item>;
//# sourceMappingURL=TrackingEvent_designer_remove_item.d.ts.map