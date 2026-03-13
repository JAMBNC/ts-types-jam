import { z } from "zod";

export const ForceAdderCode = z.literal("setup_charge");
export type ForceAdderCode = z.infer<typeof ForceAdderCode>;
