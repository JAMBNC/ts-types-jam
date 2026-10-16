import { z } from "zod";

const _DesignerSheetUploadProblem = z
  .object({
    /**What kind of problem it is, such as art outside the die or a page beyond the sheet's two faces.*/
    code: z
      .string()
      .describe(
        "What kind of problem it is, such as art outside the die or a page beyond the sheet's two faces.",
      ),
    /**A sentence the customer can act on.*/
    message: z.string().describe("A sentence the customer can act on."),
  })
  .strict()
  .describe(
    "Something in the uploaded sheet that could not be placed as it was drawn.",
  );
type _DesignerSheetUploadProblemSchema = typeof _DesignerSheetUploadProblem;
export interface DesignerSheetUploadProblemSchema extends _DesignerSheetUploadProblemSchema {}
/**Something in the uploaded sheet that could not be placed as it was drawn.*/
export const DesignerSheetUploadProblem: DesignerSheetUploadProblemSchema =
  _DesignerSheetUploadProblem;
export type DesignerSheetUploadProblem = z.infer<
  typeof DesignerSheetUploadProblem
>;
