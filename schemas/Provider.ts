import { z } from "zod";

const _Provider = z.enum(["FedEx", "UPS", "USPS", "Other"]);
type _ProviderSchema = typeof _Provider;
export interface ProviderSchema extends _ProviderSchema {}
export const Provider: ProviderSchema = _Provider;
export type Provider = z.infer<typeof Provider>;
