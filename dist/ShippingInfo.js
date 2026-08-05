import { z } from "zod";
import { Provider } from "./Provider.js";
const _ShippingInfo = z
    .object({
    accountNumber: z.string().optional(),
    accountType: z.string().optional(),
    isBlindShipping: z.boolean().default(false),
    method: z.string().optional(),
    provider: Provider.optional(),
    weightInPounds: z.number().gte(0).optional(),
})
    .passthrough();
export const ShippingInfo = _ShippingInfo;
