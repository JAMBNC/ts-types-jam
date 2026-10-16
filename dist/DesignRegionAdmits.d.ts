import { z } from "zod";
declare const _DesignRegionAdmits: z.ZodEnum<{
    exterior: "exterior";
    interior: "interior";
}>;
type _DesignRegionAdmitsSchema = typeof _DesignRegionAdmits;
export interface DesignRegionAdmitsSchema extends _DesignRegionAdmitsSchema {
}
/**Which side of the outline art belongs on: interior keeps art inside it, exterior keeps art out of it. A template region without it is exterior, a DesignState page region without it is interior.*/
export declare const DesignRegionAdmits: DesignRegionAdmitsSchema;
export type DesignRegionAdmits = z.infer<typeof DesignRegionAdmits>;
export {};
//# sourceMappingURL=DesignRegionAdmits.d.ts.map