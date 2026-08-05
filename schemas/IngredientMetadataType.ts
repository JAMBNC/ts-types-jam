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
type _IngredientMetadataTypeSchema = typeof _IngredientMetadataType;
export interface IngredientMetadataTypeSchema extends _IngredientMetadataTypeSchema {}
/**The type of ingredient in the designer.*/
export const IngredientMetadataType: IngredientMetadataTypeSchema =
  _IngredientMetadataType;
export type IngredientMetadataType = z.infer<typeof IngredientMetadataType>;
