import { z } from "zod";
declare const _DesignPlacementRule: z.ZodObject<{
    default: z.ZodOptional<z.ZodString>;
    options: z.ZodOptional<z.ZodArray<z.ZodString>>;
    insetMm: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
type _DesignPlacementRuleSchema = typeof _DesignPlacementRule;
export interface DesignPlacementRuleSchema extends _DesignPlacementRuleSchema {
}
/**How one placement key of a fixture family may be set: the value a fixture takes when nothing picks one, the values a person can pick from, and how far in from the anchor's span the art box sits.*/
export declare const DesignPlacementRule: DesignPlacementRuleSchema;
export type DesignPlacementRule = z.infer<typeof DesignPlacementRule>;
export {};
//# sourceMappingURL=DesignPlacementRule.d.ts.map