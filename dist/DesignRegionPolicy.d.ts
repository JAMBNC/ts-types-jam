import { z } from "zod";
declare const _DesignRegionPolicy: z.ZodEnum<{
    block: "block";
    clip: "clip";
    warn: "warn";
}>;
type _DesignRegionPolicySchema = typeof _DesignRegionPolicy;
export interface DesignRegionPolicySchema extends _DesignRegionPolicySchema {
}
/**How hard the restriction is: refuse the placement, allow it and warn, or allow it and trim the art to the region on the canvas and in print.*/
export declare const DesignRegionPolicy: DesignRegionPolicySchema;
export type DesignRegionPolicy = z.infer<typeof DesignRegionPolicy>;
export {};
//# sourceMappingURL=DesignRegionPolicy.d.ts.map