import { z } from "zod";
declare const _RollAdderCode: z.ZodEnum<{
    roll_qty_1000: "roll_qty_1000";
    roll_qty_500: "roll_qty_500";
    roll_qty_250: "roll_qty_250";
    roll_qty_125: "roll_qty_125";
    roll_core_3: "roll_core_3";
    roll_core_1: "roll_core_1";
    roll_perforation: "roll_perforation";
    roll_no_perforation: "roll_no_perforation";
    individual_cut: "individual_cut";
    mirroring: "mirroring";
}>;
type _RollAdderCodeSchema = typeof _RollAdderCode;
export interface RollAdderCodeSchema extends _RollAdderCodeSchema {
}
export declare const RollAdderCode: RollAdderCodeSchema;
export type RollAdderCode = z.infer<typeof RollAdderCode>;
export {};
//# sourceMappingURL=RollAdderCode.d.ts.map