import { z } from "zod";
export declare const PrintVerification: z.ZodObject<{
    messages: z.ZodArray<z.ZodString>;
    digital: z.ZodBoolean;
    white: z.ZodBoolean;
    offset: z.ZodBoolean;
    foil: z.ZodBoolean;
    status: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
export type PrintVerification = z.infer<typeof PrintVerification>;
//# sourceMappingURL=PrintVerification.d.ts.map