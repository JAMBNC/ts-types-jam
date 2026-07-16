import { z } from "zod";
export declare const DesignerChangeProcessTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_change_process">;
    payload: z.ZodObject<{
        type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            image: "image";
            recipientAddress: "recipientAddress";
            returnAddress: "returnAddress";
            sRecipientAddress: "sRecipientAddress";
            text: "text";
            variableData: "variableData";
        }>, z.ZodNull]>>;
        oldProcess: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            digital: "digital";
            emboss: "emboss";
            flexography: "flexography";
            foil: "foil";
            inkjet: "inkjet";
            offset: "offset";
            screen: "screen";
            sublimation: "sublimation";
            thermal: "thermal";
        }>, z.ZodNull]>>;
        newProcess: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            digital: "digital";
            emboss: "emboss";
            flexography: "flexography";
            foil: "foil";
            inkjet: "inkjet";
            offset: "offset";
            screen: "screen";
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