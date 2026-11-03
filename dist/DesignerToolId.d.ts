import { z } from "zod";
declare const _DesignerToolId: z.ZodEnum<{
    lamination: "lamination";
    logo: "logo";
    returnAddress: "returnAddress";
    prepress: "prepress";
    qrCode: "qrCode";
    backgroundColor: "backgroundColor";
    freeText: "freeText";
    ingredientRestrictions: "ingredientRestrictions";
    mailingAddress: "mailingAddress";
    pageRestrictions: "pageRestrictions";
    uploadFullDesign: "uploadFullDesign";
}>;
type _DesignerToolIdSchema = typeof _DesignerToolId;
export interface DesignerToolIdSchema extends _DesignerToolIdSchema {
}
/**Identifier of a designer tool that a config may deny. Values are the designer's tool registry keys. Some tools are intentionally excluded and cannot be denied.*/
export declare const DesignerToolId: DesignerToolIdSchema;
export type DesignerToolId = z.infer<typeof DesignerToolId>;
export {};
//# sourceMappingURL=DesignerToolId.d.ts.map