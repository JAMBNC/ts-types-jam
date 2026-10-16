import { z } from "zod";
declare const _SlitAdderCode: z.ZodString;
type _SlitAdderCodeSchema = typeof _SlitAdderCode;
export interface SlitAdderCodeSchema extends _SlitAdderCodeSchema {
}
/**A slit purchase: the pocket or face it lands on, the fixture kind, and how it is placed, e.g. rslit_h1_center. The codes are catalog rows (design_adder) decomposed once into adder_fixture, so the shape is a pattern here and never parsed at runtime.*/
export declare const SlitAdderCode: SlitAdderCodeSchema;
export type SlitAdderCode = z.infer<typeof SlitAdderCode>;
export {};
//# sourceMappingURL=SlitAdderCode.d.ts.map