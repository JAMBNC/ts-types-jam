import { z } from "zod";
declare const _CoverageAdderCodeEnum: z.ZodIntersection<z.ZodObject<{
    type: z.ZodLiteral<"coverageAdderCodeEnum">;
}, z.core.$loose>, z.ZodUnion<readonly [import("./FoilCoverageAdderCode.js").FoilCoverageAdderCodeSchema, import("./InkCoverageAdderCode.js").InkCoverageAdderCodeSchema]>>;
type _CoverageAdderCodeEnumSchema = typeof _CoverageAdderCodeEnum;
export interface CoverageAdderCodeEnumSchema extends _CoverageAdderCodeEnumSchema {
}
export declare const CoverageAdderCodeEnum: CoverageAdderCodeEnumSchema;
export type CoverageAdderCodeEnum = z.infer<typeof CoverageAdderCodeEnum>;
export {};
//# sourceMappingURL=CoverageAdderCodeEnum.d.ts.map