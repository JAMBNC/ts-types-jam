import { z } from "zod";
const _ProofAdderCode = z.enum(["dig_proof_s1", "dig_proof_s2"]);
export const ProofAdderCode = _ProofAdderCode;
