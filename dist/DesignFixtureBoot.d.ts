import { z } from "zod";
declare const _DesignFixtureBoot: z.ZodObject<{
    families: z.ZodRecord<z.ZodString, import("./DesignFixtureFamily.js").DesignFixtureFamilySchema>;
    fixtures: z.ZodArray<import("./DesignFixture.js").DesignFixtureSchema>;
    adders: z.ZodRecord<z.ZodString, import("./DesignAdderFixture.js").DesignAdderFixtureSchema>;
}, z.core.$strict>;
type _DesignFixtureBootSchema = typeof _DesignFixtureBoot;
export interface DesignFixtureBootSchema extends _DesignFixtureBootSchema {
}
/**The fixture catalog a designer session and a vendor render work from: the families with their placement rules, the active fixtures, and what each fixture adder places.*/
export declare const DesignFixtureBoot: DesignFixtureBootSchema;
export type DesignFixtureBoot = z.infer<typeof DesignFixtureBoot>;
export {};
//# sourceMappingURL=DesignFixtureBoot.d.ts.map