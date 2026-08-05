import { z } from "zod";
const _Provider = z.enum(["FedEx", "UPS", "USPS", "Other"]);
export const Provider = _Provider;
