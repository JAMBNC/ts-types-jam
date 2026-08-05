import { z } from "zod";
const _PrintMethodAdderCode = z.enum([
    "print_method_auto",
    "print_method_digital",
    "print_method_offset",
    "letterpress_ink1",
]);
export const PrintMethodAdderCode = _PrintMethodAdderCode;
