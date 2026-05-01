import { z } from "zod";
export declare const DesignerChangeQuantityTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_change_quantity">;
    payload: z.ZodObject<{
        type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            text: "text";
            image: "image";
            sRecipientAddress: "sRecipientAddress";
            recipientAddress: "recipientAddress";
            returnAddress: "returnAddress";
            variableData: "variableData";
        }>, z.ZodNull]>>;
        oldQuantity: z.ZodOptional<z.ZodNumber>;
        newQuantity: z.ZodOptional<z.ZodNumber>;
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