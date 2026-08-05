import { z } from "zod";
declare const _PositionType: z.ZodEnum<{
    absolute: "absolute";
    relative: "relative";
}>;
type _PositionTypeSchema = typeof _PositionType;
export interface PositionTypeSchema extends _PositionTypeSchema {
}
export declare const PositionType: PositionTypeSchema;
export type PositionType = z.infer<typeof PositionType>;
export {};
//# sourceMappingURL=PositionType.d.ts.map