import { z } from "zod";
declare const _IngredientMetadataType: z.ZodEnum<{
    text: "text";
    image: "image";
    returnAddress: "returnAddress";
    sRecipientAddress: "sRecipientAddress";
    recipientAddress: "recipientAddress";
    qrCode: "qrCode";
    variableData: "variableData";
}>;
type _IngredientMetadataTypeSchema = typeof _IngredientMetadataType;
export interface IngredientMetadataTypeSchema extends _IngredientMetadataTypeSchema {
}
/**The type of ingredient in the designer.*/
export declare const IngredientMetadataType: IngredientMetadataTypeSchema;
export type IngredientMetadataType = z.infer<typeof IngredientMetadataType>;
export {};
//# sourceMappingURL=IngredientMetadataType.d.ts.map