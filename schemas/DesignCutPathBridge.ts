import { z } from "zod";
import { Dimension } from "./Dimension.js";

const _DesignCutPathBridge = z
  .object({ x0: Dimension, y0: Dimension, x1: Dimension, y1: Dimension })
  .strict()
  .describe(
    "One gap tracing closed: a straight segment from (x0, y0) to (x1, y1) on the flat sheet.",
  );
type _DesignCutPathBridgeSchema = typeof _DesignCutPathBridge;
export interface DesignCutPathBridgeSchema extends _DesignCutPathBridgeSchema {}
/**One gap tracing closed: a straight segment from (x0, y0) to (x1, y1) on the flat sheet.*/
export const DesignCutPathBridge: DesignCutPathBridgeSchema =
  _DesignCutPathBridge;
export type DesignCutPathBridge = z.infer<typeof DesignCutPathBridge>;
