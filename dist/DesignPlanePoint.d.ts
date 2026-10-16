import { z } from "zod";
declare const _DesignPlanePoint: z.ZodObject<{
    x: z.ZodNumber;
    y: z.ZodNumber;
}, z.core.$strict>;
type _DesignPlanePointSchema = typeof _DesignPlanePoint;
export interface DesignPlanePointSchema extends _DesignPlanePointSchema {
}
/**A point as two plain numbers, in whatever unit the type holding it names.*/
export declare const DesignPlanePoint: DesignPlanePointSchema;
export type DesignPlanePoint = z.infer<typeof DesignPlanePoint>;
export {};
//# sourceMappingURL=DesignPlanePoint.d.ts.map