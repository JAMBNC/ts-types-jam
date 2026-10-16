import { z } from "zod";
import { DesignPlacementRule } from "./DesignPlacementRule.js";

const _DesignFixtureFamily = z
  .object({
    label: z.string(),
    placementRules: z.record(z.string(), DesignPlacementRule),
  })
  .strict()
  .describe(
    "A kind of fixture, like a slit or a ribbon, and the rules its placements follow. The rule keys are the keys a DesignFixturePlacement of this family carries, so a new family brings new keys without a schema change.",
  );
type _DesignFixtureFamilySchema = typeof _DesignFixtureFamily;
export interface DesignFixtureFamilySchema extends _DesignFixtureFamilySchema {}
/**A kind of fixture, like a slit or a ribbon, and the rules its placements follow. The rule keys are the keys a DesignFixturePlacement of this family carries, so a new family brings new keys without a schema change.*/
export const DesignFixtureFamily: DesignFixtureFamilySchema =
  _DesignFixtureFamily;
export type DesignFixtureFamily = z.infer<typeof DesignFixtureFamily>;
