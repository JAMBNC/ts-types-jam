import { z } from "zod";
declare const _DesignerPersistenceEvent: z.ZodObject<{
    type: z.ZodLiteral<"persistence">;
    payload: z.ZodObject<{
        isDirty: z.ZodBoolean;
    }, z.core.$strict>;
}, z.core.$strict>;
type _DesignerPersistenceEventSchema = typeof _DesignerPersistenceEvent;
export interface DesignerPersistenceEventSchema extends _DesignerPersistenceEventSchema {
}
/**Event emitted when the designer's dirty state changes.*/
export declare const DesignerPersistenceEvent: DesignerPersistenceEventSchema;
export type DesignerPersistenceEvent = z.infer<typeof DesignerPersistenceEvent>;
export {};
//# sourceMappingURL=DesignerPersistenceEvent.d.ts.map