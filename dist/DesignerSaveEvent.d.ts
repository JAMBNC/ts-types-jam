import { z } from "zod";
declare const _DesignerSaveEvent: z.ZodObject<{
    type: z.ZodLiteral<"save">;
    payload: z.ZodObject<{
        design: z.ZodString;
        encodedSnapshots: z.ZodString;
        config: z.ZodString;
        preflight: z.ZodString;
        saveRequestUuid: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strict>;
type _DesignerSaveEventSchema = typeof _DesignerSaveEvent;
export interface DesignerSaveEventSchema extends _DesignerSaveEventSchema {
}
/**Event emitted when the designer saves the current design state.*/
export declare const DesignerSaveEvent: DesignerSaveEventSchema;
export type DesignerSaveEvent = z.infer<typeof DesignerSaveEvent>;
export {};
//# sourceMappingURL=DesignerSaveEvent.d.ts.map