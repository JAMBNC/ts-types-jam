import { z } from "zod";
import { Dimension } from "./Dimension.js";
const _DesignCutPathBridge = z
    .object({ x0: Dimension, y0: Dimension, x1: Dimension, y1: Dimension })
    .strict()
    .describe("One gap tracing closed: a straight segment from (x0, y0) to (x1, y1) on the flat sheet.");
/**One gap tracing closed: a straight segment from (x0, y0) to (x1, y1) on the flat sheet.*/
export const DesignCutPathBridge = _DesignCutPathBridge;
