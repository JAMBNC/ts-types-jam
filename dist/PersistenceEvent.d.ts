import { z } from "zod";
/**Event emitted when the designer's dirty state changes.*/
export declare const PersistenceEvent: z.ZodObject<{
    type: z.ZodLiteral<"persistence">;
    payload: z.ZodObject<{
        isDirty: z.ZodBoolean;
    }, z.core.$strict>;
}, z.core.$strict>;
export type PersistenceEvent = z.infer<typeof PersistenceEvent>;
//# sourceMappingURL=PersistenceEvent.d.ts.map