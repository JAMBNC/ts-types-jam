import { z } from "zod";

export const ExtraAdderCode = z.enum([
  "handling_charge",
  "print_charge",
  "setup_charge",
]);
export type ExtraAdderCode = z.infer<typeof ExtraAdderCode>;
