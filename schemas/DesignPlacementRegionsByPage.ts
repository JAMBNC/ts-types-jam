import { z } from "zod";
import { DesignPlacementRegion } from "./DesignPlacementRegion.js";

const _DesignPlacementRegionsByPage = z
  .record(z.string(), z.array(DesignPlacementRegion))
  .describe(
    "An instantiated design's placement regions, keyed by the page ids in that design.",
  );
type _DesignPlacementRegionsByPageSchema = typeof _DesignPlacementRegionsByPage;
export interface DesignPlacementRegionsByPageSchema extends _DesignPlacementRegionsByPageSchema {}
/**An instantiated design's placement regions, keyed by the page ids in that design.*/
export const DesignPlacementRegionsByPage: DesignPlacementRegionsByPageSchema =
  _DesignPlacementRegionsByPage;
export type DesignPlacementRegionsByPage = z.infer<
  typeof DesignPlacementRegionsByPage
>;
