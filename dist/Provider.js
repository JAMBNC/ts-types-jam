import { z } from "zod/v4";
export const Provider = z.enum(["FedEx", "UPS", "USPS", "Other"]);
