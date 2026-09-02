import { z } from "zod";
import { Auth } from "./Auth.js";
const _DesignerAuth = z
    .object({
    /**A discriminated union of all supported authentication types.*/
    endpointAuth: Auth,
})
    .strict();
export const DesignerAuth = _DesignerAuth;
