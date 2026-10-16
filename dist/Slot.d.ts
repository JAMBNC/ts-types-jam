import { z } from "zod";
declare const _Slot: z.ZodObject<{
    role: import("./SlotRole.js").SlotRoleSchema;
    index: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
type _SlotSchema = typeof _Slot;
export interface SlotSchema extends _SlotSchema {
}
/**What content belongs in this frame, so a filler and a transposition can address it. Function, never placement: the view the slot sits on already states front/back/inside, which is what makes `logo` on an envelope and `logo` on a folder the same key.*/
export declare const Slot: SlotSchema;
export type Slot = z.infer<typeof Slot>;
export {};
//# sourceMappingURL=Slot.d.ts.map