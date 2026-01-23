import { z } from "zod/v4";
export declare const DesignerInitializationPayload: z.ZodObject<{
    config: z.ZodAny;
    product: z.ZodAny;
    endpoints: z.ZodObject<{
        design: z.ZodObject<{
            save: z.ZodString;
        }, z.core.$strip>;
        image: z.ZodOptional<z.ZodObject<{
            gallery: z.ZodOptional<z.ZodString>;
            upload: z.ZodOptional<z.ZodString>;
            delete: z.ZodOptional<z.ZodString>;
            rendition: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        fonts: z.ZodOptional<z.ZodObject<{
            all: z.ZodOptional<z.ZodString>;
            get: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    auth: z.ZodObject<{
        chiliAuth: z.ZodOptional<z.ZodString>;
        endpointAuth: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    pricing: z.ZodOptional<z.ZodAny>;
    uiLabels: z.ZodOptional<z.ZodAny>;
    fonts: z.ZodOptional<z.ZodArray<z.ZodAny>>;
}, z.core.$strip>;
export type DesignerInitializationPayload = z.infer<typeof DesignerInitializationPayload>;
//# sourceMappingURL=DesignerInitializationPayload.d.ts.map