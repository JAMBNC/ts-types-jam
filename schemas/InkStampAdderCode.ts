import { z } from "zod";

export const InkStampAdderCode = z.enum(["ink_stamp_1", "ink_stamp_2"]);
export type InkStampAdderCode = z.infer<typeof InkStampAdderCode>;
