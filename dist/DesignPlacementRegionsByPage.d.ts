import { z } from "zod";
declare const _DesignPlacementRegionsByPage: z.ZodRecord<z.ZodString, z.ZodArray<import("./DesignPlacementRegion.js").DesignPlacementRegionSchema>>;
type _DesignPlacementRegionsByPageSchema = typeof _DesignPlacementRegionsByPage;
export interface DesignPlacementRegionsByPageSchema extends _DesignPlacementRegionsByPageSchema {
}
/**An instantiated design's placement regions, keyed by the page ids in that design.*/
export declare const DesignPlacementRegionsByPage: DesignPlacementRegionsByPageSchema;
export type DesignPlacementRegionsByPage = z.infer<typeof DesignPlacementRegionsByPage>;
export {};
//# sourceMappingURL=DesignPlacementRegionsByPage.d.ts.map