import { z } from "zod";
import { DesignFoldState } from "./DesignFoldState.js";
import { DesignHinge } from "./DesignHinge.js";
const _DesignFolding = z
    .object({
    /**The panel that stays put while everything folds around it: the face the vendor prints upright.*/
    fixedFace: z
        .string()
        .describe("The panel that stays put while everything folds around it: the face the vendor prints upright."),
    hinges: z.array(DesignHinge),
    states: z.array(DesignFoldState),
})
    .strict()
    .describe("The fold model: the fixed face, the hinges joining panels across creases, and the named fold states. The hinge tree is the maximum spanning tree of the hinges by length, grown from the fixed face.");
/**The fold model: the fixed face, the hinges joining panels across creases, and the named fold states. The hinge tree is the maximum spanning tree of the hinges by length, grown from the fixed face.*/
export const DesignFolding = _DesignFolding;
