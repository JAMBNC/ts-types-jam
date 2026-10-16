import { z } from "zod";
import { DesignPlanePoint } from "./DesignPlanePoint.js";
import { DesignRegionAdmits } from "./DesignRegionAdmits.js";
import { DesignRegionPolicy } from "./DesignRegionPolicy.js";

const _DesignPlacementRegion = z
  .object({
    id: z.string(),
    /**What the region is for, e.g. glue. Reported, never branched on.*/
    role: z
      .string()
      .describe(
        "What the region is for, e.g. glue. Reported, never branched on.",
      )
      .optional(),
    /**How hard the restriction is: refuse the placement, allow it and warn, or allow it and trim the art to the region on the canvas and in print.*/
    policy: DesignRegionPolicy,
    /**Which side of the outline art belongs on: interior keeps art inside it, exterior keeps art out of it. A template region without it is exterior, a DesignState page region without it is interior.*/
    admits: DesignRegionAdmits,
    /**The outline in the page's own frame, in inches.*/
    polygon: z
      .array(DesignPlanePoint)
      .describe("The outline in the page's own frame, in inches."),
  })
  .strict()
  .describe(
    "Where art may or may not sit on one page of an instantiated design, as instantiate() works it out from the template's regions. The same polygons drive the editor's limits, the export's clips and the reorder check, so they are stored with the instantiation rather than derived again.",
  );
type _DesignPlacementRegionSchema = typeof _DesignPlacementRegion;
export interface DesignPlacementRegionSchema extends _DesignPlacementRegionSchema {}
/**Where art may or may not sit on one page of an instantiated design, as instantiate() works it out from the template's regions. The same polygons drive the editor's limits, the export's clips and the reorder check, so they are stored with the instantiation rather than derived again.*/
export const DesignPlacementRegion: DesignPlacementRegionSchema =
  _DesignPlacementRegion;
export type DesignPlacementRegion = z.infer<typeof DesignPlacementRegion>;
