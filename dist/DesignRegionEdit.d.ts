import { z } from "zod";
declare const _DesignRegionEdit: z.ZodObject<{
    id: z.ZodString;
    region: z.ZodOptional<import("./DesignRegion.js").DesignRegionSchema>;
}, z.core.$strict>;
type _DesignRegionEditSchema = typeof _DesignRegionEdit;
export interface DesignRegionEditSchema extends _DesignRegionEditSchema {
}
/**A region prepress added, changed or deleted: the region that replaces the one with this id, or joins the interpretation; absent region deletes it.*/
export declare const DesignRegionEdit: DesignRegionEditSchema;
export type DesignRegionEdit = z.infer<typeof DesignRegionEdit>;
export {};
//# sourceMappingURL=DesignRegionEdit.d.ts.map