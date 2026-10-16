import { z } from "zod";
declare const _DesignFolding: z.ZodObject<{
    fixedFace: z.ZodString;
    hinges: z.ZodArray<import("./DesignHinge.js").DesignHingeSchema>;
    states: z.ZodArray<import("./DesignFoldState.js").DesignFoldStateSchema>;
}, z.core.$strict>;
type _DesignFoldingSchema = typeof _DesignFolding;
export interface DesignFoldingSchema extends _DesignFoldingSchema {
}
/**The fold model: the fixed face, the hinges joining panels across creases, and the named fold states. The hinge tree is the maximum spanning tree of the hinges by length, grown from the fixed face.*/
export declare const DesignFolding: DesignFoldingSchema;
export type DesignFolding = z.infer<typeof DesignFolding>;
export {};
//# sourceMappingURL=DesignFolding.d.ts.map