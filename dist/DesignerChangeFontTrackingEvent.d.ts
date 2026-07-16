import { z } from "zod";
export declare const DesignerChangeFontTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_change_font">;
    payload: z.ZodObject<{
        type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            image: "image";
            recipientAddress: "recipientAddress";
            returnAddress: "returnAddress";
            sRecipientAddress: "sRecipientAddress";
            text: "text";
            variableData: "variableData";
        }>, z.ZodNull]>>;
        oldFont: z.ZodString;
        newFont: z.ZodString;
        designer: z.ZodEnum<{
            base: "base";
            hermes: "hermes";
        }>;
        merchant: z.ZodString;
        deltaTime: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerChangeFontTrackingEvent = z.infer<typeof DesignerChangeFontTrackingEvent>;
//# sourceMappingURL=DesignerChangeFontTrackingEvent.d.ts.map