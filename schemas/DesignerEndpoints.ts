import { z } from "zod/v4";

export const DesignerEndpoints = z.any();
export type DesignerEndpoints = z.infer<typeof DesignerEndpoints>;
