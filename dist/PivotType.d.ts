import { z } from "zod";
declare const _PivotType: z.ZodEnum<{
    primary: "primary";
    secondary: "secondary";
}>;
type _PivotTypeSchema = typeof _PivotType;
export interface PivotTypeSchema extends _PivotTypeSchema {
}
export declare const PivotType: PivotTypeSchema;
export type PivotType = z.infer<typeof PivotType>;
export {};
//# sourceMappingURL=PivotType.d.ts.map