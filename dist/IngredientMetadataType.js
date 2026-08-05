import { z } from "zod";
const _IngredientMetadataType = z
    .enum([
    "sRecipientAddress",
    "recipientAddress",
    "returnAddress",
    "image",
    "text",
    "variableData",
])
    .describe("The type of ingredient in the designer.");
/**The type of ingredient in the designer.*/
export const IngredientMetadataType = _IngredientMetadataType;
