import { z } from "zod";
declare const _Alignment: z.ZodEnum<{
    left: "left";
    center: "center";
    right: "right";
}>;
type _AlignmentSchema = typeof _Alignment;
export interface AlignmentSchema extends _AlignmentSchema {
}
export declare const Alignment: AlignmentSchema;
export type Alignment = z.infer<typeof Alignment>;
export {};
//# sourceMappingURL=Alignment.d.ts.map