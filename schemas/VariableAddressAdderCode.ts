import { z } from "zod";

export const VariableAddressAdderCode = z.enum([
  "varaddress_side1",
  "varaddress_side2",
]);
export type VariableAddressAdderCode = z.infer<typeof VariableAddressAdderCode>;
