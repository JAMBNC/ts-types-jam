import { z } from "zod";
declare const _DesignHinge: z.ZodObject<{
    id: z.ZodString;
    foldId: z.ZodString;
    faces: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
type _DesignHingeSchema = typeof _DesignHinge;
export interface DesignHingeSchema extends _DesignHingeSchema {
}
/**A crease where it joins two panels.*/
export declare const DesignHinge: DesignHingeSchema;
export type DesignHinge = z.infer<typeof DesignHinge>;
export {};
//# sourceMappingURL=DesignHinge.d.ts.map