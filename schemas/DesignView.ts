import { z } from "zod";
import { DesignFace } from "./DesignFace.js";
import { DesignPanelPlacement } from "./DesignPanelPlacement.js";
import { Dimension } from "./Dimension.js";

const _DesignView = z
  .object({
    id: z.string(),
    /**What a human is shown for a view with no page selector ui label, such as an outsideEdges face that is a Pocket on one style and a Gusset on another. A standard view such as closedFront is named by DesignerUiLabels and this is ignored for it.*/
    label: z
      .string()
      .describe(
        "What a human is shown for a view with no page selector ui label, such as an outsideEdges face that is a Pocket on one style and a Gusset on another. A standard view such as closedFront is named by DesignerUiLabels and this is ignored for it.",
      )
      .optional(),
    width: Dimension.optional(),
    height: Dimension.optional(),
    /**The id of the fold state this view shows.*/
    state: z
      .string()
      .describe("The id of the fold state this view shows.")
      .optional(),
    /**Which side of the sheet the view shows.*/
    camera: DesignFace.optional(),
    /**Degrees the camera is turned about its line of sight, clockwise. Absent is 0.*/
    roll: z
      .number()
      .describe(
        "Degrees the camera is turned about its line of sight, clockwise. Absent is 0.",
      )
      .optional(),
    /**Turn each face to read the way it does in the preview views.*/
    upright: z
      .boolean()
      .describe("Turn each face to read the way it does in the preview views.")
      .optional(),
    /**A read-only view that is never a page: the art is projected onto it from the views it lives on.*/
    preview: z
      .boolean()
      .describe(
        "A read-only view that is never a page: the art is projected onto it from the views it lives on.",
      )
      .optional(),
    /**An editable view that holds only the designable faces no other editable view shows, such as a spine or a gusset a closed view never sees. The fold engine drops it when there are none.*/
    remainder: z
      .boolean()
      .describe(
        "An editable view that holds only the designable faces no other editable view shows, such as a spine or a gusset a closed view never sees. The fold engine drops it when there are none.",
      )
      .optional(),
    /**The panels this view shows, and where each one sits in it. Derived from the fold state and the camera.*/
    placements: z
      .array(DesignPanelPlacement)
      .describe(
        "The panels this view shows, and where each one sits in it. Derived from the fold state and the camera.",
      ),
  })
  .strict()
  .describe(
    "An assembled face the customer designs on, such as a front cover or an inside spread. A view is a page, bound by Page.view.",
  );
type _DesignViewSchema = typeof _DesignView;
export interface DesignViewSchema extends _DesignViewSchema {}
/**An assembled face the customer designs on, such as a front cover or an inside spread. A view is a page, bound by Page.view.*/
export const DesignView: DesignViewSchema = _DesignView;
export type DesignView = z.infer<typeof DesignView>;
