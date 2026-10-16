import { z } from "zod";

const _SlitAdderCode = z
  .string()
  .regex(new RegExp("^(lslit|rslit|mslit|fslit|cslit|flap_slit)_[a-z0-9_]+$"))
  .describe(
    "A slit purchase: the pocket or face it lands on, the fixture kind, and how it is placed, e.g. rslit_h1_center. The codes are catalog rows (design_adder) decomposed once into adder_fixture, so the shape is a pattern here and never parsed at runtime.",
  );
type _SlitAdderCodeSchema = typeof _SlitAdderCode;
export interface SlitAdderCodeSchema extends _SlitAdderCodeSchema {}
/**A slit purchase: the pocket or face it lands on, the fixture kind, and how it is placed, e.g. rslit_h1_center. The codes are catalog rows (design_adder) decomposed once into adder_fixture, so the shape is a pattern here and never parsed at runtime.*/
export const SlitAdderCode: SlitAdderCodeSchema = _SlitAdderCode;
export type SlitAdderCode = z.infer<typeof SlitAdderCode>;
