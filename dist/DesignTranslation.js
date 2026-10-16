import { z } from "zod";
import { Dimension } from "./Dimension.js";
const _DesignTranslation = z
    .object({ x: Dimension, y: Dimension })
    .strict()
    .describe("An offset in view space.");
/**An offset in view space.*/
export const DesignTranslation = _DesignTranslation;
