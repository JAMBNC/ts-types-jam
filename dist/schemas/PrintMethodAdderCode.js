import { z } from "zod";
export const PrintMethodAdderCode = z.enum([
    "print_method_auto",
    "print_method_digital",
    "print_method_offset",
    "letterpress_ink1",
]);
