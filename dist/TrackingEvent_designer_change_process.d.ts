import { z } from "zod";
export declare const TrackingEvent_designer_change_process: z.ZodObject<{
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
            offset: "offset";
            digital: "digital";
            foil: "foil";
            emboss: "emboss";
            screen: "screen";
            inkjet: "inkjet";
            flexography: "flexography";
            sublimation: "sublimation";
            thermal: "thermal";
        }>, z.ZodNull]>>;
        newProcess: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            offset: "offset";
            digital: "digital";
            foil: "foil";
            emboss: "emboss";
            screen: "screen";
            inkjet: "inkjet";
            flexography: "flexography";
            sublimation: "sublimation";
            thermal: "thermal";
        }>, z.ZodNull]>>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type TrackingEvent_designer_change_process = z.infer<typeof TrackingEvent_designer_change_process>;
//# sourceMappingURL=TrackingEvent_designer_change_process.d.ts.map