import { z } from "zod";
const _DesignReflectOp = z
    .object({
    op: z.literal("reflect"),
    /**The fold this op reflects across. Its line is read from the interpretation's `folds`, never copied here.*/
    foldId: z
        .string()
        .describe("The fold this op reflects across. Its line is read from the interpretation's `folds`, never copied here."),
})
    .strict()
    .describe("Fold the panel across a crease, reflecting its geometry across the referenced fold — a pocket folded up onto an inside face. Names the fold by id and never copies its line, so a prepress correction to the fold moves the fold-up with it.");
/**Fold the panel across a crease, reflecting its geometry across the referenced fold — a pocket folded up onto an inside face. Names the fold by id and never copies its line, so a prepress correction to the fold moves the fold-up with it.*/
export const DesignReflectOp = _DesignReflectOp;
