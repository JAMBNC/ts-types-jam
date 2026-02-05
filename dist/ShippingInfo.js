import { z } from "zod";
import { Provider } from "./Provider.js";
export const ShippingInfo = z
    .object({
    accountNumber: z.string().optional(),
    accountType: z.string().optional(),
    isBlindShipping: z.boolean(),
    method: z.string().optional(),
    provider: Provider,
    weightInPounds: z.number().gte(0).optional(),
})
    .passthrough();
