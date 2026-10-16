import { z } from "zod";
declare const _DesignAnchor: z.ZodObject<{
    id: z.ZodString;
    panelId: z.ZodString;
    role: z.ZodString;
    frame: import("./DesignAnchorFrame.js").DesignAnchorFrameSchema;
    accepts: z.ZodOptional<z.ZodArray<z.ZodString>>;
    fixed: z.ZodOptional<import("./DesignFixtureChoice.js").DesignFixtureChoiceSchema>;
    source: z.ZodOptional<import("./DesignAnchorSource.js").DesignAnchorSourceSchema>;
}, z.core.$strict>;
type _DesignAnchorSchema = typeof _DesignAnchor;
export interface DesignAnchorSchema extends _DesignAnchorSchema {
}
/**A frame on a template where a fixture of one role can sit. Geometry plus a role, on a named panel, so left and right are the panel's and never a coordinate. Fusion proposes anchors from faces, prepress moves them, and a person's anchor survives every re-derive.*/
export declare const DesignAnchor: DesignAnchorSchema;
export type DesignAnchor = z.infer<typeof DesignAnchor>;
export {};
//# sourceMappingURL=DesignAnchor.d.ts.map