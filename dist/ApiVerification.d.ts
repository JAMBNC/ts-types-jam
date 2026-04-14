import { z } from "zod";
export declare const ApiVerification: z.ZodObject<{
    messages: z.ZodArray<z.ZodString>;
    sides: z.ZodArray<z.ZodObject<{
        messages: z.ZodArray<z.ZodString>;
        digital: z.ZodBoolean;
        white: z.ZodBoolean;
        offset: z.ZodBoolean;
        foil: z.ZodBoolean;
        status: z.ZodOptional<z.ZodString>;
    }, z.core.$loose>>;
    layers: z.ZodObject<{
        messages: z.ZodArray<z.ZodString>;
        desc: z.ZodArray<z.ZodString>;
    }, z.core.$loose>;
}, z.core.$loose>;
export type ApiVerification = z.infer<typeof ApiVerification>;
//# sourceMappingURL=ApiVerification.d.ts.map