import { z } from "zod";
declare const _DesignAnchorEdit: z.ZodObject<{
    anchorId: z.ZodString;
    frame: import("./DesignAnchorFrame.js").DesignAnchorFrameSchema;
    accepts: z.ZodOptional<z.ZodArray<z.ZodString>>;
    fixed: z.ZodOptional<import("./DesignFixtureChoice.js").DesignFixtureChoiceSchema>;
    panelId: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodString>;
    removed: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
type _DesignAnchorEditSchema = typeof _DesignAnchorEdit;
export interface DesignAnchorEditSchema extends _DesignAnchorEditSchema {
}
/**An anchor's whole editable state after prepress touched it. An edit naming an anchor the interpretation lacks adds it, given a panelId and role; removed takes it out. An edited anchor becomes a person's anchor.*/
export declare const DesignAnchorEdit: DesignAnchorEditSchema;
export type DesignAnchorEdit = z.infer<typeof DesignAnchorEdit>;
export {};
//# sourceMappingURL=DesignAnchorEdit.d.ts.map