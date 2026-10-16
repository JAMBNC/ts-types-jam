import { z } from "zod";
declare const _DesignReflectOp: z.ZodObject<{
    op: z.ZodLiteral<"reflect">;
    foldId: z.ZodString;
}, z.core.$strict>;
type _DesignReflectOpSchema = typeof _DesignReflectOp;
export interface DesignReflectOpSchema extends _DesignReflectOpSchema {
}
/**Fold the panel across a crease, reflecting its geometry across the referenced fold — a pocket folded up onto an inside face. Names the fold by id and never copies its line, so a prepress correction to the fold moves the fold-up with it.*/
export declare const DesignReflectOp: DesignReflectOpSchema;
export type DesignReflectOp = z.infer<typeof DesignReflectOp>;
export {};
//# sourceMappingURL=DesignReflectOp.d.ts.map