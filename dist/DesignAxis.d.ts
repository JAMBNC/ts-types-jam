import { z } from "zod";
declare const _DesignAxis: z.ZodEnum<{
    H: "H";
    V: "V";
}>;
type _DesignAxisSchema = typeof _DesignAxis;
export interface DesignAxisSchema extends _DesignAxisSchema {
}
/**An axis-aligned line's orientation. H is a horizontal line (constant y); V is a vertical line (constant x).*/
export declare const DesignAxis: DesignAxisSchema;
export type DesignAxis = z.infer<typeof DesignAxis>;
export {};
//# sourceMappingURL=DesignAxis.d.ts.map