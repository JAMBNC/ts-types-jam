import { z } from "zod";
const _DesignAxis = z
    .enum(["H", "V"])
    .describe("An axis-aligned line's orientation. H is a horizontal line (constant y); V is a vertical line (constant x).");
/**An axis-aligned line's orientation. H is a horizontal line (constant y); V is a vertical line (constant x).*/
export const DesignAxis = _DesignAxis;
