import { z } from "zod";
const _DesignerStarterEndpoints = z
    .object({
    /**The endpoint URL listing the starters offered for a product (:sku filled client-side). Returns a DesignerStarterOffersResponse. (uses the DesignerAuth.endpointAuth)*/
    list: z
        .string()
        .url()
        .describe("The endpoint URL listing the starters offered for a product (:sku filled client-side). Returns a DesignerStarterOffersResponse. (uses the DesignerAuth.endpointAuth)"),
    /**The endpoint URL returning one starter's design for a product (:starterId and :sku filled client-side). Returns a DesignerStarterDesignResponse. (uses the DesignerAuth.endpointAuth)*/
    design: z
        .string()
        .url()
        .describe("The endpoint URL returning one starter's design for a product (:starterId and :sku filled client-side). Returns a DesignerStarterDesignResponse. (uses the DesignerAuth.endpointAuth)"),
})
    .strict();
export const DesignerStarterEndpoints = _DesignerStarterEndpoints;
