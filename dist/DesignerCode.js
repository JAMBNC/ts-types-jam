import { z } from "zod";
/**An analytics/tracking code to help id the designer event source.*/
export const DesignerCode = z
    .enum(["base", "hermes"])
    .describe("An analytics/tracking code to help id the designer event source.");
