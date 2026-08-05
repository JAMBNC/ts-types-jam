import { z } from "zod";
declare const _FontList: z.ZodArray<import("./FontFamily.js").FontFamilySchema>;
type _FontListSchema = typeof _FontList;
export interface FontListSchema extends _FontListSchema {
}
/**A collection of font families available in the system.*/
export declare const FontList: FontListSchema;
export type FontList = z.infer<typeof FontList>;
export {};
//# sourceMappingURL=FontList.d.ts.map