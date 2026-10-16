import { z } from "zod";
declare const _DesignRotateOp: z.ZodObject<{
    op: z.ZodLiteral<"rotate">;
    degrees: z.ZodNumber;
}, z.core.$strict>;
type _DesignRotateOpSchema = typeof _DesignRotateOp;
export interface DesignRotateOpSchema extends _DesignRotateOpSchema {
}
/**Rotate the panel about the flat die's origin, clockwise in degrees. A cover's half turn is this.*/
export declare const DesignRotateOp: DesignRotateOpSchema;
export type DesignRotateOp = z.infer<typeof DesignRotateOp>;
export {};
//# sourceMappingURL=DesignRotateOp.d.ts.map