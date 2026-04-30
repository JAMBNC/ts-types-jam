import { z } from "zod";
/**An analytics/tracking code to help id the designer event source.*/
export declare const DesignerCode: z.ZodEnum<{
    base: "base";
    hermes: "hermes";
}>;
export type DesignerCode = z.infer<typeof DesignerCode>;
//# sourceMappingURL=DesignerCode.d.ts.map