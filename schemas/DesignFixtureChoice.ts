import { z } from "zod";
import { DesignFixturePlacement } from "./DesignFixturePlacement.js";

const _DesignFixtureChoice = z
  .object({
    /**The fixture's catalog code, e.g. "h1".*/
    fixture: z.string().describe('The fixture\'s catalog code, e.g. "h1".'),
    /**How a family's placement rule positions a fixture on an anchor. The keys are the family's, read from its placement rules, so a new family adds keys without a schema change: a slit uses justify (center, left, right), zone (lowRight, topRight) and vertical (top, mid, bot).*/
    placement: DesignFixturePlacement.optional(),
  })
  .strict()
  .describe(
    "A fixture placed on an anchor: which catalog fixture and how the family's placement rule positions it. The shape a purchase decomposes to and the shape a fixed anchor carries.",
  );
type _DesignFixtureChoiceSchema = typeof _DesignFixtureChoice;
export interface DesignFixtureChoiceSchema extends _DesignFixtureChoiceSchema {}
/**A fixture placed on an anchor: which catalog fixture and how the family's placement rule positions it. The shape a purchase decomposes to and the shape a fixed anchor carries.*/
export const DesignFixtureChoice: DesignFixtureChoiceSchema =
  _DesignFixtureChoice;
export type DesignFixtureChoice = z.infer<typeof DesignFixtureChoice>;
