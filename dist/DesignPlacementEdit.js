import { z } from "zod";
import { DesignPlacement } from "./DesignPlacement.js";
const _DesignPlacementEdit = z
    .object({
    view: z.string(),
    panelId: z.string(),
    /**How a panel maps into a view. A tagged union: today one affine variant covers every assembly a folder has (rigid, reflected, flipped, and any composition), and a cylinder or a wrap can add a non-affine variant additively later.*/
    placement: DesignPlacement,
})
    .strict()
    .describe("Prepress moved a panel in a view: the placement that replaces the panel's, or joins the view when the panel had none there.");
/**Prepress moved a panel in a view: the placement that replaces the panel's, or joins the view when the panel had none there.*/
export const DesignPlacementEdit = _DesignPlacementEdit;
