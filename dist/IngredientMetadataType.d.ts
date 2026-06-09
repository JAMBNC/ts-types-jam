import { z } from "zod";
/**The type of ingredient in the designer.*/
export declare const IngredientMetadataType: z.ZodEnum<{
    text: "text";
    image: "image";
    sRecipientAddress: "sRecipientAddress";
    recipientAddress: "recipientAddress";
    returnAddress: "returnAddress";
    variableData: "variableData";
}>;
export type IngredientMetadataType = z.infer<typeof IngredientMetadataType>;
//# sourceMappingURL=IngredientMetadataType.d.ts.map