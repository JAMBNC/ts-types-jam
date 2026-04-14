import { z } from "zod";
import { DesignProofImage } from "./DesignProofImage.js";
export const DesignVerificationSummary = z
    .object({
    design_id: z.string(),
    configurator_id: z.string(),
    order_date: z.string(),
    customer_order_id: z.string(),
    store: z.string(),
    master_category: z.string(),
    primary_category: z.string(),
    sub_category: z.string(),
    design_sku: z.string(),
    proof_images: z.array(DesignProofImage),
})
    .passthrough();
