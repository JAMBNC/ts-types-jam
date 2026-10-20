import { z } from "zod";
declare const _DesignerStarterDesignResponse: z.ZodObject<{
    design: import("./DesignState.js").DesignStateSchema;
    baseDesign: z.ZodOptional<import("./DesignerBaseDesignBoot.js").DesignerBaseDesignBootSchema>;
    workspaceOptionUuid: z.ZodOptional<z.ZodString>;
    productSwitch: z.ZodOptional<import("./DesignerProductSwitch.js").DesignerProductSwitchSchema>;
}, z.core.$strict>;
type _DesignerStarterDesignResponseSchema = typeof _DesignerStarterDesignResponse;
export interface DesignerStarterDesignResponseSchema extends _DesignerStarterDesignResponseSchema {
}
/**A starter's design, ready to load as a new design: no uuid, and metadata.startedFrom names the starter. It loads onto the current product, or onto productSwitch's product when the starter is sold as a different one.*/
export declare const DesignerStarterDesignResponse: DesignerStarterDesignResponseSchema;
export type DesignerStarterDesignResponse = z.infer<typeof DesignerStarterDesignResponse>;
export {};
//# sourceMappingURL=DesignerStarterDesignResponse.d.ts.map