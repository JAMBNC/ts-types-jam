import { z } from "zod";
declare const _OptionUse: z.ZodEnum<{
    selected: "selected";
    none: "none";
    all: "all";
}>;
type _OptionUseSchema = typeof _OptionUse;
export interface OptionUseSchema extends _OptionUseSchema {
}
export declare const OptionUse: OptionUseSchema;
export type OptionUse = z.infer<typeof OptionUse>;
export {};
//# sourceMappingURL=OptionUse.d.ts.map