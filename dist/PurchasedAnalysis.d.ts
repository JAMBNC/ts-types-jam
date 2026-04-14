import { z } from "zod";
export declare const PurchasedAnalysis: z.ZodObject<{
    identifier: z.ZodString;
    foil_stamps: z.ZodNumber;
    foil_colors: z.ZodNumber;
    pms: z.ZodNumber;
    cmyk: z.ZodBoolean;
    white: z.ZodBoolean;
    black: z.ZodBoolean;
    order_id: z.ZodString;
    order_num: z.ZodString;
    order_date: z.ZodString;
    channel: z.ZodString;
}, z.core.$loose>;
export type PurchasedAnalysis = z.infer<typeof PurchasedAnalysis>;
//# sourceMappingURL=PurchasedAnalysis.d.ts.map