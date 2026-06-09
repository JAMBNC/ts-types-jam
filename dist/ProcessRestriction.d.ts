import { z } from "zod";
export declare const ProcessRestriction: z.ZodObject<{
    type: z.ZodEnum<{
        oneOf: "oneOf";
        anyOf: "anyOf";
        zeroOrOneOf: "zeroOrOneOf";
    }>;
    processes: z.ZodArray<z.ZodArray<z.ZodEnum<{
        offset: "offset";
        digital: "digital";
        foil: "foil";
        emboss: "emboss";
        screen: "screen";
        inkjet: "inkjet";
        flexography: "flexography";
        sublimation: "sublimation";
        thermal: "thermal";
    }>>>;
}, z.core.$loose>;
export type ProcessRestriction = z.infer<typeof ProcessRestriction>;
//# sourceMappingURL=ProcessRestriction.d.ts.map