import { z } from "zod";
declare const _MaterialCode: z.ZodEnum<{
    nonPorous: "nonPorous";
    porous: "porous";
}>;
type _MaterialCodeSchema = typeof _MaterialCode;
export interface MaterialCodeSchema extends _MaterialCodeSchema {
}
/**The material code for the material being printed upon*/
export declare const MaterialCode: MaterialCodeSchema;
export type MaterialCode = z.infer<typeof MaterialCode>;
export {};
//# sourceMappingURL=MaterialCode.d.ts.map