import { z } from "zod";
export declare const DesignVerificationSummary: z.ZodObject<{
    design_id: z.ZodString;
    configurator_id: z.ZodString;
    order_date: z.ZodString;
    customer_order_id: z.ZodString;
    store: z.ZodString;
    master_category: z.ZodString;
    primary_category: z.ZodString;
    sub_category: z.ZodString;
    design_sku: z.ZodString;
    proof_images: z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        label: z.ZodString;
    }, z.core.$loose>>;
}, z.core.$loose>;
export type DesignVerificationSummary = z.infer<typeof DesignVerificationSummary>;
//# sourceMappingURL=DesignVerificationSummary.d.ts.map