import { z } from "zod";

export const Provider = z.enum(["FedEx", "UPS", "USPS", "Other"]);
export type Provider = z.infer<typeof Provider>;
