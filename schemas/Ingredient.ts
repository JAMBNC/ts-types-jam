import { z } from "zod";
import { ChiliAssetIngredient } from "./ChiliAssetIngredient.js";
import { CircleIngredient } from "./CircleIngredient.js";
import { CoatingIngredient } from "./CoatingIngredient.js";
import { DataIngredient } from "./DataIngredient.js";
import { FillIngredient } from "./FillIngredient.js";
import { ImageIngredient } from "./ImageIngredient.js";
import { LineIngredient } from "./LineIngredient.js";
import { RectangleIngredient } from "./RectangleIngredient.js";
import { ShapeIngredient } from "./ShapeIngredient.js";
import { TextIngredient } from "./TextIngredient.js";

/**A discriminated union of all supported ingredient types.*/
export const Ingredient = z
  .discriminatedUnion("type", [
    DataIngredient,
    FillIngredient,
    ImageIngredient,
    LineIngredient,
    RectangleIngredient,
    ShapeIngredient,
    TextIngredient,
    CoatingIngredient,
    CircleIngredient,
    ChiliAssetIngredient,
  ])
  .describe("A discriminated union of all supported ingredient types.");
export type Ingredient = z.infer<typeof Ingredient>;
