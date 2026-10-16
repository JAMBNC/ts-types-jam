import { z } from "zod";
import { Dimension } from "./Dimension.js";

const _DesignTranslation = z
  .object({ x: Dimension, y: Dimension })
  .strict()
  .describe("An offset in view space.");
type _DesignTranslationSchema = typeof _DesignTranslation;
export interface DesignTranslationSchema extends _DesignTranslationSchema {}
/**An offset in view space.*/
export const DesignTranslation: DesignTranslationSchema = _DesignTranslation;
export type DesignTranslation = z.infer<typeof DesignTranslation>;
