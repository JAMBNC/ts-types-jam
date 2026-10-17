import { z } from "zod";
import { DesignPlacementRegionsByPage } from "./DesignPlacementRegionsByPage.js";
import { Template } from "./Template.js";

const _DesignerBaseDesignBoot = z
  .object({
    /**A template entity. Geometry lives in the artifact and in the DesignState distilled from it; everything here is the part that cannot be re-derived from pixels or paths.*/
    template: Template,
    /**An instantiated design's placement regions, keyed by the page ids in that design.*/
    placementRegions: DesignPlacementRegionsByPage,
  })
  .strict()
  .describe(
    "What the designer needs of a style's base design to dress a view-bound design: the template it was instantiated from and the placement regions of each page.",
  );
type _DesignerBaseDesignBootSchema = typeof _DesignerBaseDesignBoot;
export interface DesignerBaseDesignBootSchema extends _DesignerBaseDesignBootSchema {}
/**What the designer needs of a style's base design to dress a view-bound design: the template it was instantiated from and the placement regions of each page.*/
export const DesignerBaseDesignBoot: DesignerBaseDesignBootSchema =
  _DesignerBaseDesignBoot;
export type DesignerBaseDesignBoot = z.infer<typeof DesignerBaseDesignBoot>;
