import { z } from "zod";
declare const _Unit: z.ZodEnum<{
    in: "in";
    mm: "mm";
    px: "px";
    pt: "pt";
}>;
type _UnitSchema = typeof _Unit;
export interface UnitSchema extends _UnitSchema {
}
/**The unit of measurement for dimensions.*/
export declare const Unit: UnitSchema;
export type Unit = z.infer<typeof Unit>;
export {};
//# sourceMappingURL=Unit.d.ts.map