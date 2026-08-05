import { z } from "zod";

const _ExtraAdderCode = z.enum([
  "handling_charge",
  "print_charge",
  "setup_charge",
]);
type _ExtraAdderCodeSchema = typeof _ExtraAdderCode;
export interface ExtraAdderCodeSchema extends _ExtraAdderCodeSchema {}
export const ExtraAdderCode: ExtraAdderCodeSchema = _ExtraAdderCode;
export type ExtraAdderCode = z.infer<typeof ExtraAdderCode>;
