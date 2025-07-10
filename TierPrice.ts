import { z } from "zod";

export const TierPrice = z.object({
  price: z.number(),
  startingAtQty: z.number().int(),
});
export type TierPrice = z.infer<typeof TierPrice>;
