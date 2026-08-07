import { z } from "zod";
const _RollAdderCode = z.enum([
    "roll_qty_1000",
    "roll_qty_500",
    "roll_qty_250",
    "roll_qty_125",
    "roll_core_3",
    "roll_core_1",
    "roll_perforation",
    "roll_no_perforation",
    "individual_cut",
    "mirroring",
]);
export const RollAdderCode = _RollAdderCode;
