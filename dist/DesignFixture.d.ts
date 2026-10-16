import { z } from "zod";
declare const _DesignFixture: z.ZodObject<{
    code: z.ZodString;
    family: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodString>;
    width: import("./Dimension.js").DimensionSchema;
    height: import("./Dimension.js").DimensionSchema;
    paths: z.ZodArray<import("./Path.js").PathSchema>;
    previewUrl: z.ZodOptional<z.ZodString>;
    version: z.ZodNumber;
}, z.core.$strict>;
type _DesignFixtureSchema = typeof _DesignFixture;
export interface DesignFixtureSchema extends _DesignFixtureSchema {
}
/**A catalog shape a purchase or a style places on an anchor: a business card slit, later a ribbon or a window. Drawn once in its own frame and placed by transform, so hermes draws it with the guide code it has and the vendor plate strokes it with the cut path code it has.*/
export declare const DesignFixture: DesignFixtureSchema;
export type DesignFixture = z.infer<typeof DesignFixture>;
export {};
//# sourceMappingURL=DesignFixture.d.ts.map