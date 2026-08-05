import { z } from "zod";

export const RollAdderCode = z.enum([
  "roll_qty_1000",
  "roll_qty_500",
  "roll_qty_250",
  "roll_qty_125",
  "roll_core_3",
  "roll_core_1",
  "roll_perforation",
  "roll_no_perforation",
]);
export type RollAdderCode = z.infer<typeof RollAdderCode>;
