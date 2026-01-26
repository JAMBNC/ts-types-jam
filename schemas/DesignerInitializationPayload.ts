import { z } from "zod/v4";

export const DesignerInitializationPayload = z
  .any()
  .describe("The required initialization data for the Hermes designer.");
export type DesignerInitializationPayload = z.infer<
  typeof DesignerInitializationPayload
>;
