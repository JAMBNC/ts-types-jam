import { z } from "zod";

const _DesignPrintForm = z
  .enum(["made", "flat"])
  .describe(
    "How a piece is printed: made, printed after it is converted so each page of the vendor's PDF is one face designed as is (an envelope), or flat, printed as a sheet that folds into views (a folder).",
  );
type _DesignPrintFormSchema = typeof _DesignPrintForm;
export interface DesignPrintFormSchema extends _DesignPrintFormSchema {}
/**How a piece is printed: made, printed after it is converted so each page of the vendor's PDF is one face designed as is (an envelope), or flat, printed as a sheet that folds into views (a folder).*/
export const DesignPrintForm: DesignPrintFormSchema = _DesignPrintForm;
export type DesignPrintForm = z.infer<typeof DesignPrintForm>;
