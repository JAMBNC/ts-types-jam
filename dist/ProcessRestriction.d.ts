import { z } from "zod";
declare const _ProcessRestriction: z.ZodObject<{
    type: z.ZodEnum<{
        anyOf: "anyOf";
        oneOf: "oneOf";
        zeroOrOneOf: "zeroOrOneOf";
    }>;
    processes: z.ZodArray<z.ZodArray<import("./Process.js").ProcessSchema>>;
}, z.core.$loose>;
type _ProcessRestrictionSchema = typeof _ProcessRestriction;
export interface ProcessRestrictionSchema extends _ProcessRestrictionSchema {
}
export declare const ProcessRestriction: ProcessRestrictionSchema;
export type ProcessRestriction = z.infer<typeof ProcessRestriction>;
export {};
//# sourceMappingURL=ProcessRestriction.d.ts.map