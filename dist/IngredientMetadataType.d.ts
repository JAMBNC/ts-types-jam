import { z } from "zod";
/**The type of ingredient in the designer.*/
export declare const IngredientMetadataType: z.ZodEnum<{
    image: "image";
    recipientAddress: "recipientAddress";
    returnAddress: "returnAddress";
    sRecipientAddress: "sRecipientAddress";
    text: "text";
    variableData: "variableData";
}>;
export type IngredientMetadataType = z.infer<typeof IngredientMetadataType>;
//# sourceMappingURL=IngredientMetadataType.d.ts.map