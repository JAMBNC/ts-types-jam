import { z } from "zod";
export declare const TrackingEvent_designer_change_color: z.ZodObject<{
    event: z.ZodLiteral<"designer_change_color">;
    payload: z.ZodObject<{
        type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            text: "text";
            image: "image";
            sRecipientAddress: "sRecipientAddress";
            recipientAddress: "recipientAddress";
            returnAddress: "returnAddress";
            variableData: "variableData";
        }>, z.ZodNull]>>;
        oldColors: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            representations: z.ZodObject<{
                sRGB: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                US_Web_Coated_SWOP_v2: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                CIELAB: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>;
            uuid: z.ZodString;
        }, z.core.$loose>>;
        newColors: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            representations: z.ZodObject<{
                sRGB: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                US_Web_Coated_SWOP_v2: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                CIELAB: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>;
            uuid: z.ZodString;
        }, z.core.$loose>>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type TrackingEvent_designer_change_color = z.infer<typeof TrackingEvent_designer_change_color>;
//# sourceMappingURL=TrackingEvent_designer_change_color.d.ts.map