import { z } from "zod";
declare const _DesignFixtureChoice: z.ZodObject<{
    fixture: z.ZodString;
    placement: z.ZodOptional<import("./DesignFixturePlacement.js").DesignFixturePlacementSchema>;
}, z.core.$strict>;
type _DesignFixtureChoiceSchema = typeof _DesignFixtureChoice;
export interface DesignFixtureChoiceSchema extends _DesignFixtureChoiceSchema {
}
/**A fixture placed on an anchor: which catalog fixture and how the family's placement rule positions it. The shape a purchase decomposes to and the shape a fixed anchor carries.*/
export declare const DesignFixtureChoice: DesignFixtureChoiceSchema;
export type DesignFixtureChoice = z.infer<typeof DesignFixtureChoice>;
export {};
//# sourceMappingURL=DesignFixtureChoice.d.ts.map