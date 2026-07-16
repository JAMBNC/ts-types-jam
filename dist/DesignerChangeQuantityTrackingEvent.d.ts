import { z } from "zod";
export declare const DesignerChangeQuantityTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_change_quantity">;
    payload: z.ZodObject<{
        type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            image: "image";
            recipientAddress: "recipientAddress";
            returnAddress: "returnAddress";
            sRecipientAddress: "sRecipientAddress";
            text: "text";
            variableData: "variableData";
        }>, z.ZodNull]>>;
        oldQuantity: z.ZodNumber;
        newQuantity: z.ZodNumber;
        designer: z.ZodEnum<{
            base: "base";
            hermes: "hermes";
        }>;
        merchant: z.ZodString;
        deltaTime: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerChangeQuantityTrackingEvent = z.infer<typeof DesignerChangeQuantityTrackingEvent>;
//# sourceMappingURL=DesignerChangeQuantityTrackingEvent.d.ts.map