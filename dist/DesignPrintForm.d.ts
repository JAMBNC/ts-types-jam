import { z } from "zod";
declare const _DesignPrintForm: z.ZodEnum<{
    flat: "flat";
    made: "made";
}>;
type _DesignPrintFormSchema = typeof _DesignPrintForm;
export interface DesignPrintFormSchema extends _DesignPrintFormSchema {
}
/**How a piece is printed: made, printed after it is converted so each page of the vendor's PDF is one face designed as is (an envelope), or flat, printed as a sheet that folds into views (a folder).*/
export declare const DesignPrintForm: DesignPrintFormSchema;
export type DesignPrintForm = z.infer<typeof DesignPrintForm>;
export {};
//# sourceMappingURL=DesignPrintForm.d.ts.map