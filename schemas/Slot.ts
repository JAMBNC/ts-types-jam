import { z } from "zod";
import { SlotRole } from "./SlotRole.js";

const _Slot = z
  .object({
    role: SlotRole,
    /**Disambiguates multiples of one role and gives transposition a stable ordering.*/
    index: z
      .number()
      .int()
      .gte(0)
      .describe(
        "Disambiguates multiples of one role and gives transposition a stable ordering.",
      )
      .optional(),
  })
  .strict()
  .describe(
    "What content belongs in this frame, so a filler and a transposition can address it. Function, never placement: the view the slot sits on already states front/back/inside, which is what makes `logo` on an envelope and `logo` on a folder the same key.",
  );
type _SlotSchema = typeof _Slot;
export interface SlotSchema extends _SlotSchema {}
/**What content belongs in this frame, so a filler and a transposition can address it. Function, never placement: the view the slot sits on already states front/back/inside, which is what makes `logo` on an envelope and `logo` on a folder the same key.*/
export const Slot: SlotSchema = _Slot;
export type Slot = z.infer<typeof Slot>;
