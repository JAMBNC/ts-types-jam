import { z } from "zod";
import { DesignFoldDirection } from "./DesignFoldDirection.js";
import { Dimension } from "./Dimension.js";

const _DesignFold = z
  .object({
    id: z.string(),
    x0: Dimension,
    y0: Dimension,
    x1: Dimension,
    y1: Dimension,
    /**Which way the sheet folds, seen from the printed side.*/
    direction: DesignFoldDirection,
    /**Folding sequence. Matters when one fold traps another.*/
    order: z
      .number()
      .int()
      .gte(0)
      .describe("Folding sequence. Matters when one fold traps another.")
      .optional(),
  })
  .strict()
  .describe("A single fold line on the flat sheet.");
type _DesignFoldSchema = typeof _DesignFold;
export interface DesignFoldSchema extends _DesignFoldSchema {}
/**A single fold line on the flat sheet.*/
export const DesignFold: DesignFoldSchema = _DesignFold;
export type DesignFold = z.infer<typeof DesignFold>;
