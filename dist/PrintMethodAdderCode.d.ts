import { z } from "zod";
declare const _PrintMethodAdderCode: z.ZodEnum<{
    letterpress_ink1: "letterpress_ink1";
    print_method_auto: "print_method_auto";
    print_method_digital: "print_method_digital";
    print_method_offset: "print_method_offset";
}>;
type _PrintMethodAdderCodeSchema = typeof _PrintMethodAdderCode;
export interface PrintMethodAdderCodeSchema extends _PrintMethodAdderCodeSchema {
}
export declare const PrintMethodAdderCode: PrintMethodAdderCodeSchema;
export type PrintMethodAdderCode = z.infer<typeof PrintMethodAdderCode>;
export {};
//# sourceMappingURL=PrintMethodAdderCode.d.ts.map