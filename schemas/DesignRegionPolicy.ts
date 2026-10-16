import { z } from "zod";

const _DesignRegionPolicy = z
  .enum(["block", "warn", "clip"])
  .describe(
    "How hard the restriction is: refuse the placement, allow it and warn, or allow it and trim the art to the region on the canvas and in print.",
  );
type _DesignRegionPolicySchema = typeof _DesignRegionPolicy;
export interface DesignRegionPolicySchema extends _DesignRegionPolicySchema {}
/**How hard the restriction is: refuse the placement, allow it and warn, or allow it and trim the art to the region on the canvas and in print.*/
export const DesignRegionPolicy: DesignRegionPolicySchema = _DesignRegionPolicy;
export type DesignRegionPolicy = z.infer<typeof DesignRegionPolicy>;
