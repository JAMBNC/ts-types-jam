import { z } from "zod";
import { DesignerStarterOffer } from "./DesignerStarterOffer.js";
const _DesignerStarterOffersResponse = z
    .object({ starters: z.array(DesignerStarterOffer) })
    .strict()
    .describe("The starters the designer can offer for one product on the token's channel. Empty when the channel doesn't offer starters.");
/**The starters the designer can offer for one product on the token's channel. Empty when the channel doesn't offer starters.*/
export const DesignerStarterOffersResponse = _DesignerStarterOffersResponse;
