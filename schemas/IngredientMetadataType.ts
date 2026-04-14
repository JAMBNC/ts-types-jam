import { z } from "zod";

/**The type of ingredient in the designer.*/
export const IngredientMetadataType = z
  .enum([
    "sRecipientAddress",
    "recipientAddress",
    "returnAddress",
    "image",
    "text",
    "variableData",
  ])
  .describe("The type of ingredient in the designer.");
export type IngredientMetadataType = z.infer<typeof IngredientMetadataType>;
