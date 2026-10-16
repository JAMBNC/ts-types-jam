import { z } from "zod";
declare const _DesignFoldState: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    angles: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    sequence: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
type _DesignFoldStateSchema = typeof _DesignFoldState;
export interface DesignFoldStateSchema extends _DesignFoldStateSchema {
}
/**A named set of hinge angles and the order they fold in.*/
export declare const DesignFoldState: DesignFoldStateSchema;
export type DesignFoldState = z.infer<typeof DesignFoldState>;
export {};
//# sourceMappingURL=DesignFoldState.d.ts.map