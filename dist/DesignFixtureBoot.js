import { z } from "zod";
import { DesignAdderFixture } from "./DesignAdderFixture.js";
import { DesignFixture } from "./DesignFixture.js";
import { DesignFixtureFamily } from "./DesignFixtureFamily.js";
const _DesignFixtureBoot = z
    .object({
    /**Keyed by family code.*/
    families: z
        .record(z.string(), DesignFixtureFamily)
        .describe("Keyed by family code."),
    fixtures: z.array(DesignFixture),
    /**Keyed by adder code.*/
    adders: z
        .record(z.string(), DesignAdderFixture)
        .describe("Keyed by adder code."),
})
    .strict()
    .describe("The fixture catalog a designer session and a vendor render work from: the families with their placement rules, the active fixtures, and what each fixture adder places.");
/**The fixture catalog a designer session and a vendor render work from: the families with their placement rules, the active fixtures, and what each fixture adder places.*/
export const DesignFixtureBoot = _DesignFixtureBoot;
