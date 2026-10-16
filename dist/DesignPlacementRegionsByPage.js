import { z } from "zod";
import { DesignPlacementRegion } from "./DesignPlacementRegion.js";
const _DesignPlacementRegionsByPage = z
    .record(z.string(), z.array(DesignPlacementRegion))
    .describe("An instantiated design's placement regions, keyed by the page ids in that design.");
/**An instantiated design's placement regions, keyed by the page ids in that design.*/
export const DesignPlacementRegionsByPage = _DesignPlacementRegionsByPage;
