import { z } from "zod";
export declare const PositionType: z.ZodEnum<{
    absolute: "absolute";
    relative: "relative";
}>;
export type PositionType = z.infer<typeof PositionType>;
//# sourceMappingURL=PositionType.d.ts.map