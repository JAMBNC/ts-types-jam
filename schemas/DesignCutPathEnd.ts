import { z } from "zod";
import { Dimension } from "./Dimension.js";

const _DesignCutPathEnd = z
  .object({ x: Dimension, y: Dimension })
  .strict()
  .describe(
    "A point on the flat sheet where a knife stroke stops without meeting another.",
  );
type _DesignCutPathEndSchema = typeof _DesignCutPathEnd;
export interface DesignCutPathEndSchema extends _DesignCutPathEndSchema {}
/**A point on the flat sheet where a knife stroke stops without meeting another.*/
export const DesignCutPathEnd: DesignCutPathEndSchema = _DesignCutPathEnd;
export type DesignCutPathEnd = z.infer<typeof DesignCutPathEnd>;
