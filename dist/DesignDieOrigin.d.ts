import { z } from "zod";
declare const _DesignDieOrigin: z.ZodObject<{
    page: z.ZodOptional<z.ZodNumber>;
    x: import("./Dimension.js").DimensionSchema;
    y: import("./Dimension.js").DimensionSchema;
}, z.core.$strict>;
type _DesignDieOriginSchema = typeof _DesignDieOrigin;
export interface DesignDieOriginSchema extends _DesignDieOriginSchema {
}
/**The die's top-left corner on one page of the source artifact, y down from the page's top-left.*/
export declare const DesignDieOrigin: DesignDieOriginSchema;
export type DesignDieOrigin = z.infer<typeof DesignDieOrigin>;
export {};
//# sourceMappingURL=DesignDieOrigin.d.ts.map