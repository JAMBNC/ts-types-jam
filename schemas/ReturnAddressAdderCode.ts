import { z } from "zod";

export const ReturnAddressAdderCode = z.enum([
  "retaddress_side1",
  "retaddress_side2",
]);
export type ReturnAddressAdderCode = z.infer<typeof ReturnAddressAdderCode>;
