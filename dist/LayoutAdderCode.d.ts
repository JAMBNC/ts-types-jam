import { z } from "zod";
declare const _LayoutAdderCode: z.ZodEnum<{
    orientation_landscape: "orientation_landscape";
    orientation_portrait: "orientation_portrait";
}>;
type _LayoutAdderCodeSchema = typeof _LayoutAdderCode;
export interface LayoutAdderCodeSchema extends _LayoutAdderCodeSchema {
}
export declare const LayoutAdderCode: LayoutAdderCodeSchema;
export type LayoutAdderCode = z.infer<typeof LayoutAdderCode>;
export {};
//# sourceMappingURL=LayoutAdderCode.d.ts.map