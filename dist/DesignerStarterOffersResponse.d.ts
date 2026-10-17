import { z } from "zod";
declare const _DesignerStarterOffersResponse: z.ZodObject<{
    starters: z.ZodArray<import("./DesignerStarterOffer.js").DesignerStarterOfferSchema>;
}, z.core.$strict>;
type _DesignerStarterOffersResponseSchema = typeof _DesignerStarterOffersResponse;
export interface DesignerStarterOffersResponseSchema extends _DesignerStarterOffersResponseSchema {
}
/**The starters the designer can offer for one product on the token's channel. Empty when the channel doesn't offer starters.*/
export declare const DesignerStarterOffersResponse: DesignerStarterOffersResponseSchema;
export type DesignerStarterOffersResponse = z.infer<typeof DesignerStarterOffersResponse>;
export {};
//# sourceMappingURL=DesignerStarterOffersResponse.d.ts.map