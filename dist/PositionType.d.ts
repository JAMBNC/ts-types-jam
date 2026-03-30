import { z } from "zod";
export declare const PositionType: z.ZodEnum<{
    relative: "relative";
    absolute: "absolute";
}>;
export type PositionType = z.infer<typeof PositionType>;
//# sourceMappingURL=PositionType.d.ts.map