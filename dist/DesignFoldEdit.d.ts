import { z } from "zod";
declare const _DesignFoldEdit: z.ZodObject<{
    mode: import("./DesignFoldEditMode.js").DesignFoldEditModeSchema;
    fixedFace: z.ZodOptional<z.ZodString>;
    kinds: z.ZodOptional<z.ZodArray<z.ZodObject<{
        panelId: z.ZodString;
        kind: z.ZodString;
    }, z.core.$strict>>>;
    creases: z.ZodOptional<z.ZodArray<z.ZodObject<{
        foldId: z.ZodString;
        direction: z.ZodEnum<{
            mountain: "mountain";
            none: "none";
            valley: "valley";
        }>;
    }, z.core.$strict>>>;
    open: z.ZodOptional<z.ZodArray<z.ZodObject<{
        hingeId: z.ZodString;
        folded: z.ZodBoolean;
    }, z.core.$strict>>>;
    views: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        state: z.ZodOptional<z.ZodString>;
        camera: z.ZodOptional<import("./DesignFace.js").DesignFaceSchema>;
        upright: z.ZodOptional<z.ZodBoolean>;
        preview: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>>>;
}, z.core.$strict>;
type _DesignFoldEditSchema = typeof _DesignFoldEdit;
export interface DesignFoldEditSchema extends _DesignFoldEditSchema {
}
/**The fold model inputs prepress changed. The interpretation is re-folded under them.*/
export declare const DesignFoldEdit: DesignFoldEditSchema;
export type DesignFoldEdit = z.infer<typeof DesignFoldEdit>;
export {};
//# sourceMappingURL=DesignFoldEdit.d.ts.map