import { z } from "zod";
declare const _Process: z.ZodEnum<{
    digital: "digital";
    emboss: "emboss";
    flexography: "flexography";
    foil: "foil";
    inkjet: "inkjet";
    offset: "offset";
    screen: "screen";
    sublimation: "sublimation";
    thermal: "thermal";
}>;
type _ProcessSchema = typeof _Process;
export interface ProcessSchema extends _ProcessSchema {
}
/**Defines how visual content is transferred to the medium.*/
export declare const Process: ProcessSchema;
export type Process = z.infer<typeof Process>;
export {};
//# sourceMappingURL=Process.d.ts.map