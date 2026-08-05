import { z } from "zod";
declare const _ExtraAdderCode: z.ZodEnum<{
    handling_charge: "handling_charge";
    print_charge: "print_charge";
    setup_charge: "setup_charge";
}>;
type _ExtraAdderCodeSchema = typeof _ExtraAdderCode;
export interface ExtraAdderCodeSchema extends _ExtraAdderCodeSchema {
}
export declare const ExtraAdderCode: ExtraAdderCodeSchema;
export type ExtraAdderCode = z.infer<typeof ExtraAdderCode>;
export {};
//# sourceMappingURL=ExtraAdderCode.d.ts.map