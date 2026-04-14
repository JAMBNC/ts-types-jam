import { z } from "zod";
export declare const TrackingEvent_designer_change_font: z.ZodObject<{
    event: z.ZodLiteral<"designer_change_font">;
    payload: z.ZodObject<{
        type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            text: "text";
            image: "image";
            sRecipientAddress: "sRecipientAddress";
            recipientAddress: "recipientAddress";
            returnAddress: "returnAddress";
            variableData: "variableData";
        }>, z.ZodNull]>>;
        oldFont: z.ZodString;
        newFont: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strict>;
export type TrackingEvent_designer_change_font = z.infer<typeof TrackingEvent_designer_change_font>;
//# sourceMappingURL=TrackingEvent_designer_change_font.d.ts.map