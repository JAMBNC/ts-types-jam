import { z } from "zod";
declare const _ColorValue: z.ZodArray<z.ZodNumber>;
type _ColorValueSchema = typeof _ColorValue;
export interface ColorValueSchema extends _ColorValueSchema {
}
/**The numeric value of a color, dependent on the color model/color space.*/
export declare const ColorValue: ColorValueSchema;
export type ColorValue = z.infer<typeof ColorValue>;
export {};
//# sourceMappingURL=ColorValue.d.ts.map