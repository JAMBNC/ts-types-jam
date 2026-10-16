import { z } from "zod";
import { DesignFace } from "./DesignFace.js";
import { DesignPlacement } from "./DesignPlacement.js";
const _DesignPanelPlacement = z
    .object({
    panelId: z.string(),
    /**Which side of the sheet the view shows.*/
    face: DesignFace.optional(),
    /**Stacking order within the view, for panels that wrap over each other.*/
    z: z
        .number()
        .int()
        .describe("Stacking order within the view, for panels that wrap over each other.")
        .optional(),
    /**How a panel maps into a view. A tagged union: today one affine variant covers every assembly a folder has (rigid, reflected, flipped, and any composition), and a cylinder or a wrap can add a non-affine variant additively later.*/
    placement: DesignPlacement,
})
    .strict()
    .describe("One panel positioned inside a view.");
/**One panel positioned inside a view.*/
export const DesignPanelPlacement = _DesignPanelPlacement;
