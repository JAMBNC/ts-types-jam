import { z } from "zod";
declare const _DesignPlacement: import("./DesignAffinePlacement.js").DesignAffinePlacementSchema;
type _DesignPlacementSchema = typeof _DesignPlacement;
export interface DesignPlacementSchema extends _DesignPlacementSchema {
}
/**How a panel maps into a view. A tagged union: today one affine variant covers every assembly a folder has (rigid, reflected, flipped, and any composition), and a cylinder or a wrap can add a non-affine variant additively later.*/
export declare const DesignPlacement: DesignPlacementSchema;
export type DesignPlacement = z.infer<typeof DesignPlacement>;
export {};
//# sourceMappingURL=DesignPlacement.d.ts.map