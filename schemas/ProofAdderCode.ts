import { z } from "zod";

const _ProofAdderCode = z.enum(["dig_proof_s1", "dig_proof_s2"]);
type _ProofAdderCodeSchema = typeof _ProofAdderCode;
export interface ProofAdderCodeSchema extends _ProofAdderCodeSchema {}
export const ProofAdderCode: ProofAdderCodeSchema = _ProofAdderCode;
export type ProofAdderCode = z.infer<typeof ProofAdderCode>;
