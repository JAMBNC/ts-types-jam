import { z } from "zod";
const _DesignerPersistenceEvent = z
    .object({
    type: z.literal("persistence"),
    payload: z.object({ isDirty: z.boolean() }).strict(),
})
    .strict()
    .describe("Event emitted when the designer's dirty state changes.");
/**Event emitted when the designer's dirty state changes.*/
export const DesignerPersistenceEvent = _DesignerPersistenceEvent;
