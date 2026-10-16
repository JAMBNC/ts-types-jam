import { z } from "zod";
declare const _DesignFixtureFamily: z.ZodObject<{
    label: z.ZodString;
    placementRules: z.ZodRecord<z.ZodString, import("./DesignPlacementRule.js").DesignPlacementRuleSchema>;
}, z.core.$strict>;
type _DesignFixtureFamilySchema = typeof _DesignFixtureFamily;
export interface DesignFixtureFamilySchema extends _DesignFixtureFamilySchema {
}
/**A kind of fixture, like a slit or a ribbon, and the rules its placements follow. The rule keys are the keys a DesignFixturePlacement of this family carries, so a new family brings new keys without a schema change.*/
export declare const DesignFixtureFamily: DesignFixtureFamilySchema;
export type DesignFixtureFamily = z.infer<typeof DesignFixtureFamily>;
export {};
//# sourceMappingURL=DesignFixtureFamily.d.ts.map