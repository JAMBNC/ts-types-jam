import { z } from "zod";
import { ApiKey } from "./ApiKey.js";
import { Auth } from "./Auth.js";
const _DesignerAuth = z
    .object({
    /**API key authentication, typically sent as a header or query parameter.*/
    chiliAuth: ApiKey,
    /**A discriminated union of all supported authentication types.*/
    endpointAuth: Auth.optional(),
})
    .strict();
export const DesignerAuth = _DesignerAuth;
