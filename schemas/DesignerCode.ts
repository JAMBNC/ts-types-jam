import { z } from "zod";

const _DesignerCode = z
  .enum(["base", "hermes"])
  .describe("An analytics/tracking code to help id the designer event source.");
type _DesignerCodeSchema = typeof _DesignerCode;
export interface DesignerCodeSchema extends _DesignerCodeSchema {}
/**An analytics/tracking code to help id the designer event source.*/
export const DesignerCode: DesignerCodeSchema = _DesignerCode;
export type DesignerCode = z.infer<typeof DesignerCode>;
