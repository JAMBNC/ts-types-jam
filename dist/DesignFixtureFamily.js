import { z } from "zod";
import { DesignPlacementRule } from "./DesignPlacementRule.js";
const _DesignFixtureFamily = z
    .object({
    label: z.string(),
    placementRules: z.record(z.string(), DesignPlacementRule),
})
    .strict()
    .describe("A kind of fixture, like a slit or a ribbon, and the rules its placements follow. The rule keys are the keys a DesignFixturePlacement of this family carries, so a new family brings new keys without a schema change.");
/**A kind of fixture, like a slit or a ribbon, and the rules its placements follow. The rule keys are the keys a DesignFixturePlacement of this family carries, so a new family brings new keys without a schema change.*/
export const DesignFixtureFamily = _DesignFixtureFamily;
