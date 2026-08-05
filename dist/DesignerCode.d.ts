import { z } from "zod";
declare const _DesignerCode: z.ZodEnum<{
    base: "base";
    hermes: "hermes";
}>;
type _DesignerCodeSchema = typeof _DesignerCode;
export interface DesignerCodeSchema extends _DesignerCodeSchema {
}
/**An analytics/tracking code to help id the designer event source.*/
export declare const DesignerCode: DesignerCodeSchema;
export type DesignerCode = z.infer<typeof DesignerCode>;
export {};
//# sourceMappingURL=DesignerCode.d.ts.map