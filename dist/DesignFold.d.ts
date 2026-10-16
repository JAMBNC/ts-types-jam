import { z } from "zod";
declare const _DesignFold: z.ZodObject<{
    id: z.ZodString;
    x0: import("./Dimension.js").DimensionSchema;
    y0: import("./Dimension.js").DimensionSchema;
    x1: import("./Dimension.js").DimensionSchema;
    y1: import("./Dimension.js").DimensionSchema;
    direction: import("./DesignFoldDirection.js").DesignFoldDirectionSchema;
    order: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
type _DesignFoldSchema = typeof _DesignFold;
export interface DesignFoldSchema extends _DesignFoldSchema {
}
/**A single fold line on the flat sheet.*/
export declare const DesignFold: DesignFoldSchema;
export type DesignFold = z.infer<typeof DesignFold>;
export {};
//# sourceMappingURL=DesignFold.d.ts.map