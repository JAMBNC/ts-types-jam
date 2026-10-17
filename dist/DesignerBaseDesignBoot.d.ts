import { z } from "zod";
declare const _DesignerBaseDesignBoot: z.ZodObject<{
    template: import("./Template.js").TemplateSchema;
    placementRegions: import("./DesignPlacementRegionsByPage.js").DesignPlacementRegionsByPageSchema;
}, z.core.$strict>;
type _DesignerBaseDesignBootSchema = typeof _DesignerBaseDesignBoot;
export interface DesignerBaseDesignBootSchema extends _DesignerBaseDesignBootSchema {
}
/**What the designer needs of a style's base design to dress a view-bound design: the template it was instantiated from and the placement regions of each page.*/
export declare const DesignerBaseDesignBoot: DesignerBaseDesignBootSchema;
export type DesignerBaseDesignBoot = z.infer<typeof DesignerBaseDesignBoot>;
export {};
//# sourceMappingURL=DesignerBaseDesignBoot.d.ts.map