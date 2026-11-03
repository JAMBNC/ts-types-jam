import { z } from "zod";
declare const _Process: z.ZodEnum<{
    offset: "offset";
    digital: "digital";
    foil: "foil";
    emboss: "emboss";
    screen: "screen";
    inkjet: "inkjet";
    flexography: "flexography";
    sublimation: "sublimation";
    thermal: "thermal";
    whiteInk: "whiteInk";
    engraving: "engraving";
    letterpress: "letterpress";
}>;
type _ProcessSchema = typeof _Process;
export interface ProcessSchema extends _ProcessSchema {
}
/**Defines how visual content is transferred to the medium.*/
export declare const Process: ProcessSchema;
export type Process = z.infer<typeof Process>;
export {};
//# sourceMappingURL=Process.d.ts.map