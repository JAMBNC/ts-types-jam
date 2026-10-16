import { z } from "zod";
declare const _DesignTransformOp: z.ZodDiscriminatedUnion<[import("./DesignReflectOp.js").DesignReflectOpSchema, import("./DesignFlipOp.js").DesignFlipOpSchema, import("./DesignRotateOp.js").DesignRotateOpSchema]>;
type _DesignTransformOpSchema = typeof _DesignTransformOp;
export interface DesignTransformOpSchema extends _DesignTransformOpSchema {
}
/**One step of a panel's placement transform. A tagged union so prepress can compose the assembly a die actually has, op by op.*/
export declare const DesignTransformOp: DesignTransformOpSchema;
export type DesignTransformOp = z.infer<typeof DesignTransformOp>;
export {};
//# sourceMappingURL=DesignTransformOp.d.ts.map