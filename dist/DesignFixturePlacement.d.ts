import { z } from "zod";
declare const _DesignFixturePlacement: z.ZodRecord<z.ZodString, z.ZodString>;
type _DesignFixturePlacementSchema = typeof _DesignFixturePlacement;
export interface DesignFixturePlacementSchema extends _DesignFixturePlacementSchema {
}
/**How a family's placement rule positions a fixture on an anchor. The keys are the family's, read from its placement rules, so a new family adds keys without a schema change: a slit uses justify (center, left, right), zone (lowRight, topRight) and vertical (top, mid, bot).*/
export declare const DesignFixturePlacement: DesignFixturePlacementSchema;
export type DesignFixturePlacement = z.infer<typeof DesignFixturePlacement>;
export {};
//# sourceMappingURL=DesignFixturePlacement.d.ts.map