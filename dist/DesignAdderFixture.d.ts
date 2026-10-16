import { z } from "zod";
declare const _DesignAdderFixture: z.ZodObject<{
    panelName: z.ZodOptional<z.ZodString>;
    role: z.ZodString;
    fixtureCode: z.ZodOptional<z.ZodString>;
    placement: import("./DesignFixturePlacement.js").DesignFixturePlacementSchema;
}, z.core.$strict>;
type _DesignAdderFixtureSchema = typeof _DesignAdderFixture;
export interface DesignAdderFixtureSchema extends _DesignAdderFixtureSchema {
}
/**What buying an adder places: the anchor role it sits on, optionally the panel it names, the catalog fixture, and how it is placed. Decomposed from the legacy adder code, so the designer, the vendor plate and the price agree on one reading.*/
export declare const DesignAdderFixture: DesignAdderFixtureSchema;
export type DesignAdderFixture = z.infer<typeof DesignAdderFixture>;
export {};
//# sourceMappingURL=DesignAdderFixture.d.ts.map