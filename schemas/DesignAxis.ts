import { z } from "zod";

const _DesignAxis = z
  .enum(["H", "V"])
  .describe(
    "An axis-aligned line's orientation. H is a horizontal line (constant y); V is a vertical line (constant x).",
  );
type _DesignAxisSchema = typeof _DesignAxis;
export interface DesignAxisSchema extends _DesignAxisSchema {}
/**An axis-aligned line's orientation. H is a horizontal line (constant y); V is a vertical line (constant x).*/
export const DesignAxis: DesignAxisSchema = _DesignAxis;
export type DesignAxis = z.infer<typeof DesignAxis>;
