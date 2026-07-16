import { z } from "zod";
export declare const ProcessRestriction: z.ZodObject<{
    type: z.ZodEnum<{
        anyOf: "anyOf";
        oneOf: "oneOf";
        zeroOrOneOf: "zeroOrOneOf";
    }>;
    processes: z.ZodArray<z.ZodArray<z.ZodEnum<{
        digital: "digital";
        emboss: "emboss";
        flexography: "flexography";
        foil: "foil";
        inkjet: "inkjet";
        offset: "offset";
        screen: "screen";
        sublimation: "sublimation";
        thermal: "thermal";
    }>>>;
}, z.core.$loose>;
export type ProcessRestriction = z.infer<typeof ProcessRestriction>;
//# sourceMappingURL=ProcessRestriction.d.ts.map