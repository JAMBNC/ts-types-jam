import { z } from "zod";
const _DesignerCode = z
    .enum(["base", "hermes"])
    .describe("An analytics/tracking code to help id the designer event source.");
/**An analytics/tracking code to help id the designer event source.*/
export const DesignerCode = _DesignerCode;
