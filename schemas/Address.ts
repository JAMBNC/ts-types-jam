import { z } from "zod";

export const Address = z.any();
export type Address = z.infer<typeof Address>;
