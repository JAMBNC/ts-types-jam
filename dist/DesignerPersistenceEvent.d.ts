import { z } from "zod";
/**Event emitted when the designer's dirty state changes.*/
export declare const DesignerPersistenceEvent: z.ZodObject<{
    type: z.ZodLiteral<"persistence">;
    payload: z.ZodObject<{
        isDirty: z.ZodBoolean;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerPersistenceEvent = z.infer<typeof DesignerPersistenceEvent>;
//# sourceMappingURL=DesignerPersistenceEvent.d.ts.map