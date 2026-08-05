import { z } from "zod";
declare const _ProcessAllowlistItem: z.ZodObject<{
    process: import("./Process.js").ProcessSchema;
    allowCustomColors: z.ZodOptional<z.ZodBoolean>;
    allowBackgroundColor: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
type _ProcessAllowlistItemSchema = typeof _ProcessAllowlistItem;
export interface ProcessAllowlistItemSchema extends _ProcessAllowlistItemSchema {
}
export declare const ProcessAllowlistItem: ProcessAllowlistItemSchema;
export type ProcessAllowlistItem = z.infer<typeof ProcessAllowlistItem>;
export {};
//# sourceMappingURL=ProcessAllowlistItem.d.ts.map