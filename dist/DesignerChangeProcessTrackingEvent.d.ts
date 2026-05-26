import { z } from "zod";
export declare const DesignerChangeProcessTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_change_process">;
    payload: z.ZodObject<{
        type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            text: "text";
            image: "image";
            sRecipientAddress: "sRecipientAddress";
            recipientAddress: "recipientAddress";
            returnAddress: "returnAddress";
            variableData: "variableData";
        }>, z.ZodNull]>>;
        oldProcess: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            screen: "screen";
            offset: "offset";
            digital: "digital";
            foil: "foil";
            emboss: "emboss";
            inkjet: "inkjet";
            flexography: "flexography";
            sublimation: "sublimation";
            thermal: "thermal";
        }>, z.ZodNull]>>;
        newProcess: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            screen: "screen";
            offset: "offset";
            digital: "digital";
            foil: "foil";
            emboss: "emboss";
            inkjet: "inkjet";
            flexography: "flexography";
            sublimation: "sublimation";
            thermal: "thermal";
        }>, z.ZodNull]>>;
        designer: z.ZodEnum<{
            base: "base";
            hermes: "hermes";
        }>;
        merchant: z.ZodString;
        deltaTime: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerChangeProcessTrackingEvent = z.infer<typeof DesignerChangeProcessTrackingEvent>;
//# sourceMappingURL=DesignerChangeProcessTrackingEvent.d.ts.map