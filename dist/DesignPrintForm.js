import { z } from "zod";
const _DesignPrintForm = z
    .enum(["made", "flat"])
    .describe("How a piece is printed: made, printed after it is converted so each page of the vendor's PDF is one face designed as is (an envelope), or flat, printed as a sheet that folds into views (a folder).");
/**How a piece is printed: made, printed after it is converted so each page of the vendor's PDF is one face designed as is (an envelope), or flat, printed as a sheet that folds into views (a folder).*/
export const DesignPrintForm = _DesignPrintForm;
