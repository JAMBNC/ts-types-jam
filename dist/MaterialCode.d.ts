import { z } from "zod";
/**The material code for the material being printed upon*/
export declare const MaterialCode: z.ZodEnum<{
    nonPorous: "nonPorous";
    porous: "porous";
}>;
export type MaterialCode = z.infer<typeof MaterialCode>;
//# sourceMappingURL=MaterialCode.d.ts.map