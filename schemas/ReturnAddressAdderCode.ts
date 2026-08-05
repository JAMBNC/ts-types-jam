import { z } from "zod";

const _ReturnAddressAdderCode = z.enum([
  "retaddress_side1",
  "retaddress_side2",
]);
type _ReturnAddressAdderCodeSchema = typeof _ReturnAddressAdderCode;
export interface ReturnAddressAdderCodeSchema extends _ReturnAddressAdderCodeSchema {}
export const ReturnAddressAdderCode: ReturnAddressAdderCodeSchema =
  _ReturnAddressAdderCode;
export type ReturnAddressAdderCode = z.infer<typeof ReturnAddressAdderCode>;
