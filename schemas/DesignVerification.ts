import { z } from "zod";

export const DesignVerification = z.any();
export type DesignVerification = z.infer<typeof DesignVerification>;
