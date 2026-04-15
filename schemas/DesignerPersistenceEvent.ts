import { z } from "zod";

/**Event emitted when the designer's dirty state changes.*/
export const DesignerPersistenceEvent = z
  .object({
    type: z.literal("persistence"),
    payload: z.object({ isDirty: z.boolean() }).strict(),
  })
  .strict()
  .describe("Event emitted when the designer's dirty state changes.");
export type DesignerPersistenceEvent = z.infer<typeof DesignerPersistenceEvent>;
