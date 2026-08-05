import { z } from "zod";

const _DesignerPersistenceEvent = z
  .object({
    type: z.literal("persistence"),
    payload: z.object({ isDirty: z.boolean() }).strict(),
  })
  .strict()
  .describe("Event emitted when the designer's dirty state changes.");
type _DesignerPersistenceEventSchema = typeof _DesignerPersistenceEvent;
export interface DesignerPersistenceEventSchema extends _DesignerPersistenceEventSchema {}
/**Event emitted when the designer's dirty state changes.*/
export const DesignerPersistenceEvent: DesignerPersistenceEventSchema =
  _DesignerPersistenceEvent;
export type DesignerPersistenceEvent = z.infer<typeof DesignerPersistenceEvent>;
