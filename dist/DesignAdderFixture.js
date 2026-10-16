import { z } from "zod";
import { DesignFixturePlacement } from "./DesignFixturePlacement.js";
const _DesignAdderFixture = z
    .object({
    /**The panel the adder names, when it names one.*/
    panelName: z
        .string()
        .describe("The panel the adder names, when it names one.")
        .optional(),
    /**The anchor role the fixture sits on, e.g. "slit".*/
    role: z
        .string()
        .describe('The anchor role the fixture sits on, e.g. "slit".'),
    /**The fixture's catalog code. Absent when the role's anchor carries a fixed one.*/
    fixtureCode: z
        .string()
        .describe("The fixture's catalog code. Absent when the role's anchor carries a fixed one.")
        .optional(),
    /**How a family's placement rule positions a fixture on an anchor. The keys are the family's, read from its placement rules, so a new family adds keys without a schema change: a slit uses justify (center, left, right), zone (lowRight, topRight) and vertical (top, mid, bot).*/
    placement: DesignFixturePlacement,
})
    .strict()
    .describe("What buying an adder places: the anchor role it sits on, optionally the panel it names, the catalog fixture, and how it is placed. Decomposed from the legacy adder code, so the designer, the vendor plate and the price agree on one reading.");
/**What buying an adder places: the anchor role it sits on, optionally the panel it names, the catalog fixture, and how it is placed. Decomposed from the legacy adder code, so the designer, the vendor plate and the price agree on one reading.*/
export const DesignAdderFixture = _DesignAdderFixture;
