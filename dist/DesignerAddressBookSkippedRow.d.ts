import { z } from "zod";
declare const _DesignerAddressBookSkippedRow: z.ZodObject<{
    row: z.ZodNumber;
    problems: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
type _DesignerAddressBookSkippedRowSchema = typeof _DesignerAddressBookSkippedRow;
export interface DesignerAddressBookSkippedRowSchema extends _DesignerAddressBookSkippedRowSchema {
}
/**A row of an uploaded address file that was left out of the import.*/
export declare const DesignerAddressBookSkippedRow: DesignerAddressBookSkippedRowSchema;
export type DesignerAddressBookSkippedRow = z.infer<typeof DesignerAddressBookSkippedRow>;
export {};
//# sourceMappingURL=DesignerAddressBookSkippedRow.d.ts.map