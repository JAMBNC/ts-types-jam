import { z } from "zod";

const _VariableAddressAdderCode = z.enum([
  "varaddress_side1",
  "varaddress_side2",
]);
type _VariableAddressAdderCodeSchema = typeof _VariableAddressAdderCode;
export interface VariableAddressAdderCodeSchema extends _VariableAddressAdderCodeSchema {}
export const VariableAddressAdderCode: VariableAddressAdderCodeSchema =
  _VariableAddressAdderCode;
export type VariableAddressAdderCode = z.infer<typeof VariableAddressAdderCode>;
