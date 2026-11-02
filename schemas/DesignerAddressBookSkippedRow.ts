import { z } from "zod";

const _DesignerAddressBookSkippedRow = z
  .object({
    /**The row number in the file, counting the header as row 1.*/
    row: z
      .number()
      .int()
      .gte(1)
      .describe("The row number in the file, counting the header as row 1."),
    /**Why the row was left out.*/
    problems: z.array(z.string()).describe("Why the row was left out."),
  })
  .strict()
  .describe(
    "A row of an uploaded address file that was left out of the import.",
  );
type _DesignerAddressBookSkippedRowSchema =
  typeof _DesignerAddressBookSkippedRow;
export interface DesignerAddressBookSkippedRowSchema extends _DesignerAddressBookSkippedRowSchema {}
/**A row of an uploaded address file that was left out of the import.*/
export const DesignerAddressBookSkippedRow: DesignerAddressBookSkippedRowSchema =
  _DesignerAddressBookSkippedRow;
export type DesignerAddressBookSkippedRow = z.infer<
  typeof DesignerAddressBookSkippedRow
>;
