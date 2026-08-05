import { z } from "zod";
declare const _ProofAdderCode: z.ZodEnum<{
    dig_proof_s1: "dig_proof_s1";
    dig_proof_s2: "dig_proof_s2";
}>;
type _ProofAdderCodeSchema = typeof _ProofAdderCode;
export interface ProofAdderCodeSchema extends _ProofAdderCodeSchema {
}
export declare const ProofAdderCode: ProofAdderCodeSchema;
export type ProofAdderCode = z.infer<typeof ProofAdderCode>;
export {};
//# sourceMappingURL=ProofAdderCode.d.ts.map