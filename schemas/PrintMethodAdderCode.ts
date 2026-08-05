import { z } from "zod";

const _PrintMethodAdderCode = z.enum([
  "print_method_auto",
  "print_method_digital",
  "print_method_offset",
  "letterpress_ink1",
]);
type _PrintMethodAdderCodeSchema = typeof _PrintMethodAdderCode;
export interface PrintMethodAdderCodeSchema extends _PrintMethodAdderCodeSchema {}
export const PrintMethodAdderCode: PrintMethodAdderCodeSchema =
  _PrintMethodAdderCode;
export type PrintMethodAdderCode = z.infer<typeof PrintMethodAdderCode>;
