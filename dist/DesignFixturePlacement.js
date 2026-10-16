import { z } from "zod";
const _DesignFixturePlacement = z
    .record(z.string(), z.string())
    .describe("How a family's placement rule positions a fixture on an anchor. The keys are the family's, read from its placement rules, so a new family adds keys without a schema change: a slit uses justify (center, left, right), zone (lowRight, topRight) and vertical (top, mid, bot).");
/**How a family's placement rule positions a fixture on an anchor. The keys are the family's, read from its placement rules, so a new family adds keys without a schema change: a slit uses justify (center, left, right), zone (lowRight, topRight) and vertical (top, mid, bot).*/
export const DesignFixturePlacement = _DesignFixturePlacement;
