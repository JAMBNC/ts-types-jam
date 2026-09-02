import { z } from "zod";
import { Auth } from "./Auth.js";

const _DesignerAuth = z
  .object({
    /**A discriminated union of all supported authentication types.*/
    endpointAuth: Auth,
  })
  .strict();
type _DesignerAuthSchema = typeof _DesignerAuth;
export interface DesignerAuthSchema extends _DesignerAuthSchema {}
export const DesignerAuth: DesignerAuthSchema = _DesignerAuth;
export type DesignerAuth = z.infer<typeof DesignerAuth>;
