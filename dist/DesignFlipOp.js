import { z } from "zod";
import { DesignAxis } from "./DesignAxis.js";
import { Dimension } from "./Dimension.js";
const _DesignFlipOp = z
    .object({
    op: z.literal("flip"),
    /**An axis-aligned line's orientation. H is a horizontal line (constant y); V is a vertical line (constant x).*/
    axis: DesignAxis,
    coord: Dimension,
})
    .strict()
    .describe("Mirror the panel across an axis-aligned line, for an assembly that turns a panel over independently of a crease. Unlike a reflect, its line is stated here rather than read from a fold.");
/**Mirror the panel across an axis-aligned line, for an assembly that turns a panel over independently of a crease. Unlike a reflect, its line is stated here rather than read from a fold.*/
export const DesignFlipOp = _DesignFlipOp;
