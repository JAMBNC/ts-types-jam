import { z } from "zod";
export declare const DesignerRemoveItemTrackingEvent: z.ZodObject<{
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
        designer: z.ZodEnum<{
            base: "base";
            hermes: "hermes";
        }>;
        merchant: z.ZodString;
        deltaTime: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerRemoveItemTrackingEvent = z.infer<typeof DesignerRemoveItemTrackingEvent>;
//# sourceMappingURL=DesignerRemoveItemTrackingEvent.d.ts.map