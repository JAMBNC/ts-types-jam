import { z } from "zod";
declare const _DesignOptionalCut: z.ZodObject<{
    id: z.ZodString;
    path: import("./Path.js").PathSchema;
    panelId: z.ZodOptional<z.ZodString>;
    layer: z.ZodOptional<z.ZodString>;
    option: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
type _DesignOptionalCutSchema = typeof _DesignOptionalCut;
export interface DesignOptionalCutSchema extends _DesignOptionalCutSchema {
}
/**One interior cut on the flat sheet that is not the die outline. A priced vendor attribute rather than artwork, kept so the shape survives intake.*/
export declare const DesignOptionalCut: DesignOptionalCutSchema;
export type DesignOptionalCut = z.infer<typeof DesignOptionalCut>;
export {};
//# sourceMappingURL=DesignOptionalCut.d.ts.map