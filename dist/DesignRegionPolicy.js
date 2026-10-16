import { z } from "zod";
const _DesignRegionPolicy = z
    .enum(["block", "warn", "clip"])
    .describe("How hard the restriction is: refuse the placement, allow it and warn, or allow it and trim the art to the region on the canvas and in print.");
/**How hard the restriction is: refuse the placement, allow it and warn, or allow it and trim the art to the region on the canvas and in print.*/
export const DesignRegionPolicy = _DesignRegionPolicy;
