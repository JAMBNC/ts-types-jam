import { z } from "zod";
import { DesignTransformOp } from "./DesignTransformOp.js";
import { DesignTranslation } from "./DesignTranslation.js";

const _DesignAffinePlacement = z
  .object({
    type: z.literal("affine"),
    /**Applied in order to the panel's flat-sheet geometry, before `translate`. Empty is a rigid placement.*/
    ops: z
      .array(DesignTransformOp)
      .describe(
        "Applied in order to the panel's flat-sheet geometry, before `translate`. Empty is a rigid placement.",
      )
      .optional(),
    /**An offset in view space.*/
    translate: DesignTranslation.optional(),
  })
  .strict()
  .describe(
    "How a panel maps from the flat sheet into a view: an ordered list of transform ops applied to the panel's flat geometry, then a translate that positions it. One general, prepress-editable shape for every assembly a die actually has — rigid (no ops), folded up (a reflect), turned over (a flip), a cover's half turn (a rotate), or any composition, in the order they happen. An op may reverse orientation, which a matrix handles and `pdf/imposition` inverts to lay art back on the flat sheet. Prepress edits this in the base-design workspace: map a folded panel to its flat panel and compose the ops the piece really folds by.",
  );
type _DesignAffinePlacementSchema = typeof _DesignAffinePlacement;
export interface DesignAffinePlacementSchema extends _DesignAffinePlacementSchema {}
/**How a panel maps from the flat sheet into a view: an ordered list of transform ops applied to the panel's flat geometry, then a translate that positions it. One general, prepress-editable shape for every assembly a die actually has — rigid (no ops), folded up (a reflect), turned over (a flip), a cover's half turn (a rotate), or any composition, in the order they happen. An op may reverse orientation, which a matrix handles and `pdf/imposition` inverts to lay art back on the flat sheet. Prepress edits this in the base-design workspace: map a folded panel to its flat panel and compose the ops the piece really folds by.*/
export const DesignAffinePlacement: DesignAffinePlacementSchema =
  _DesignAffinePlacement;
export type DesignAffinePlacement = z.infer<typeof DesignAffinePlacement>;
