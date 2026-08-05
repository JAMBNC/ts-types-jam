import { z } from "zod";

export const SheetAdderCode = z.literal("individual_cut");
export type SheetAdderCode = z.infer<typeof SheetAdderCode>;
