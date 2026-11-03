import { z } from "zod";
declare const _PrintMethodAdderCode: z.ZodEnum<{
    print_method_auto: "print_method_auto";
    print_method_digital: "print_method_digital";
    print_method_offset: "print_method_offset";
    letterpress_ink1: "letterpress_ink1";
}>;
type _PrintMethodAdderCodeSchema = typeof _PrintMethodAdderCode;
export interface PrintMethodAdderCodeSchema extends _PrintMethodAdderCodeSchema {
}
export declare const PrintMethodAdderCode: PrintMethodAdderCodeSchema;
export type PrintMethodAdderCode = z.infer<typeof PrintMethodAdderCode>;
export {};
//# sourceMappingURL=PrintMethodAdderCode.d.ts.map