import { z } from "zod";
declare const _DesignTranslation: z.ZodObject<{
    x: import("./Dimension.js").DimensionSchema;
    y: import("./Dimension.js").DimensionSchema;
}, z.core.$strict>;
type _DesignTranslationSchema = typeof _DesignTranslation;
export interface DesignTranslationSchema extends _DesignTranslationSchema {
}
/**An offset in view space.*/
export declare const DesignTranslation: DesignTranslationSchema;
export type DesignTranslation = z.infer<typeof DesignTranslation>;
export {};
//# sourceMappingURL=DesignTranslation.d.ts.map