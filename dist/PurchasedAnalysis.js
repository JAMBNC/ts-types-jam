import { z } from "zod";
export const PurchasedAnalysis = z
    .object({
    identifier: z.string(),
    foil_stamps: z.number(),
    foil_colors: z.number(),
    pms: z.number(),
    cmyk: z.boolean(),
    white: z.boolean(),
    black: z.boolean(),
    order_id: z.string(),
    order_num: z.string(),
    order_date: z.string(),
    channel: z.string(),
})
    .passthrough();
