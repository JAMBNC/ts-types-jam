import { z } from "zod";
declare const _DesignRegion: z.ZodObject<{
    id: z.ZodString;
    role: z.ZodString;
    admits: z.ZodOptional<import("./DesignRegionAdmits.js").DesignRegionAdmitsSchema>;
    policy: import("./DesignRegionPolicy.js").DesignRegionPolicySchema;
    path: import("./Path.js").PathSchema;
}, z.core.$strict>;
type _DesignRegionSchema = typeof _DesignRegion;
export interface DesignRegionSchema extends _DesignRegionSchema {
}
/**An area that governs where art goes: it keeps art in (interior) or out (exterior), and refuses, flags or trims what crosses it. On a template it governs all customer art on its panels; on a DesignState page it governs only the ingredients whose restrictions name it.*/
export declare const DesignRegion: DesignRegionSchema;
export type DesignRegion = z.infer<typeof DesignRegion>;
export {};
//# sourceMappingURL=DesignRegion.d.ts.map