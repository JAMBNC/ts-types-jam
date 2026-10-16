import { z } from "zod";
declare const _DesignPlacementRegion: z.ZodObject<{
    id: z.ZodString;
    role: z.ZodOptional<z.ZodString>;
    policy: import("./DesignRegionPolicy.js").DesignRegionPolicySchema;
    admits: import("./DesignRegionAdmits.js").DesignRegionAdmitsSchema;
    polygon: z.ZodArray<import("./DesignPlanePoint.js").DesignPlanePointSchema>;
}, z.core.$strict>;
type _DesignPlacementRegionSchema = typeof _DesignPlacementRegion;
export interface DesignPlacementRegionSchema extends _DesignPlacementRegionSchema {
}
/**Where art may or may not sit on one page of an instantiated design, as instantiate() works it out from the template's regions. The same polygons drive the editor's limits, the export's clips and the reorder check, so they are stored with the instantiation rather than derived again.*/
export declare const DesignPlacementRegion: DesignPlacementRegionSchema;
export type DesignPlacementRegion = z.infer<typeof DesignPlacementRegion>;
export {};
//# sourceMappingURL=DesignPlacementRegion.d.ts.map