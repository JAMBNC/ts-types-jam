import { z } from "zod";
declare const _ContentPlacement: z.ZodObject<{
    type: z.ZodOptional<z.ZodString>;
    side: z.ZodOptional<z.ZodString>;
    x: z.ZodOptional<z.ZodString>;
    xType: z.ZodOptional<import("./PositionType.js").PositionTypeSchema>;
    y: z.ZodOptional<z.ZodString>;
    yType: z.ZodOptional<import("./PositionType.js").PositionTypeSchema>;
}, z.core.$loose>;
type _ContentPlacementSchema = typeof _ContentPlacement;
export interface ContentPlacementSchema extends _ContentPlacementSchema {
}
export declare const ContentPlacement: ContentPlacementSchema;
export type ContentPlacement = z.infer<typeof ContentPlacement>;
export {};
//# sourceMappingURL=ContentPlacement.d.ts.map