import { z } from "zod";
const _ExtraAdderCode = z.enum([
    "handling_charge",
    "print_charge",
    "setup_charge",
]);
export const ExtraAdderCode = _ExtraAdderCode;
